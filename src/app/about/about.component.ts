import {Component} from '@angular/core';

@Component({
  selector: 'about',
  template: require('./about.component.html')
})

export class AboutComponent {
  title: string = 'About Page';
  body:  string = 'About page body';

}