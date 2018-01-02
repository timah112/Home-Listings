import { Component, OnInit, ViewChild } from '@angular/core';
import {CribsService } from './../services/cribs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

@ViewChild('newCribForm') newCribForm: NgForm;

  //Adding an array-list for Property-types field in the form
  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];
  constructor(public cribsService: CribsService) { }

  ngOnInit() {
  }

  onCribSubmit(data): void {
    // console.log(data)
    this.cribsService.addCrib(data);
    if(data === null){
      
    }
    this.newCribForm.reset();
  }

}
