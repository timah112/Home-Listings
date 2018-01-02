import { Component } from '@angular/core';

@Component({
  //This links all the necessary files to this component
  selector: 'app-root', //The selector tag is from the index.html class
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this Application';
}
