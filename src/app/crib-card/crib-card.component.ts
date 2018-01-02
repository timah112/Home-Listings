import { Component, OnInit, Input } from '@angular/core';
import { Crib } from './../crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  //The property is called from the crib-listing component.html; here
  @Input('crib') crib: Crib;

  constructor() { }

  //This is where the variables and methods are written
  ngOnInit() {
    let bedrooms = this.crib.bedrooms; //All the variables that are called here are stored in the crib.ts interface
  }

}
