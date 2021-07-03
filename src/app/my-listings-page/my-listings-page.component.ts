import { ListingsService } from '../listings.service';
import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = []
  constructor(
    private listingsService: ListingsService
  ) {
    
  }
  
  ngOnInit(): void {
    this.listingsService.getListingsForUser().subscribe(listing => this.listings = listing)
    // this.listings = fakeMyListings;
  }

  onDeleteClicked(listingId: string): void {
    this.listingsService.deleteListing(listingId).subscribe(() =>{
      this.listings = this.listings.filter(listing => listing.id != listingId)
      alert(`Deleting your listing with id: ${listingId}`);
    })
  }

}
