import {Component} from '@angular/core';

@Component({
  selector: 'home',
  template: require('./home.component.html')
})

export class HomeComponent {
  title:string = 'Home Page';
  body:string = 'Home body';
}