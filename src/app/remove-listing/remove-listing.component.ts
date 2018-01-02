import { Component, OnInit, ViewChild } from '@angular/core';
import {CribsService } from './../services/cribs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-remove-listing',
  templateUrl: './remove-listing.component.html',
  styleUrls: ['./remove-listing.component.css']
})
export class RemoveListingComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm: NgForm;

    //Adding an array-list for Property-types field in the form
    propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];
    constructor(public cribsService: CribsService) { }

    ngOnInit() {
    }

    onCribSubmit(data): void {
      // console.log(data)
      this.cribsService.removeCrib(data);
      if(data === null){

      }
      this.newCribForm.reset();
    }


}
