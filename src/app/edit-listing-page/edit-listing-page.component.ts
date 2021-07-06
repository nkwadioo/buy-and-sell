import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';


@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
  listing: Listing;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listingsService: ListingsService
    ) { }

  ngOnInit(): void {    
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(id)
      .subscribe( listing => this.listing = listing)
    // this.listing = fakeMyListings.find( listing =>  listing.id === id);
  }

  onSubmit({name, description, price}): void {
    this.listingsService.editListing(this.listing.id, name, description, price)
      .subscribe( () => {
        this.router.navigateByUrl('/my-listings');
    });
  }

}
