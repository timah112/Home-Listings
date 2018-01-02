import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/map'; //Library to use observables in our JavaScript Application

//Services allow the communication between 2 or more componenets

@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();
  constructor(private http: Http) { }

    getAllCribs()
   {
     console.log("hello");
     return this.http.get('data/cribs.json').map(res => res.json());
   }

   addCrib(data){
     data.image = 'default-crib';
     this.newCribSubject.next(data);
   }

   removeCrib(data){
     data.image = 'default-crib';
     this.newCribSubject.next(data);
   }

}
