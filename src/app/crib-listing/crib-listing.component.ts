  import { Component, OnInit } from '@angular/core';
  import { Http} from '@angular/http';
  import { CribsService } from './../services/cribs.service';
  import { UtilService } from './../services/util.service';
  // import 'rxjs/add/operator/map';

  @Component({
    selector: 'app-crib-listing',
    templateUrl: './crib-listing.component.html',
    styleUrls: ['./crib-listing.component.css']
  })
  export class CribListingComponent implements OnInit {

    cribs: Array<any>;
    error: string;
    sortField: string = 'price';
    sortDirection: string = 'asc';
    sortFields: Array<string> = [
      'address',
      'area',
      'brathrooms',
      'price',
      'type'
    ];

    //Use a constructor for making an Http request.
    constructor(
    private http: Http,
    private cribsService: CribsService,
    private utilService: UtilService
    ) { }

      ngOnInit() {
      //Make as HTTP request when this component is called:
      //this.http.get('data/cribs.json')
      //.map(res => res.json())
      //.subscribe(
      //data => this.cribs = data
      //error => this.error = error.statusText
      // );
        this.cribsService.getAllCribs().subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
        );

        this.cribsService.newCribSubject.subscribe(
          data => this.cribs = [data, ...this.cribs]
        )

    }

  }
