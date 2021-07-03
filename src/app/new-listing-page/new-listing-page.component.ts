import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {

  constructor(
    private router: Router,
    private listingsService: ListingsService
    ) { }

  ngOnInit(): void {
  }

  onSubmit({name, description, price}): void {
    console.log(name, description)
    this.listingsService.createListing(name, description, price)
      .subscribe( () => {
        console.log('Creating a new listing..')
        this.router.navigateByUrl('/my-listings');

    })
  }

}
