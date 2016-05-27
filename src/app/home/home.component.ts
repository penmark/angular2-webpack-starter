import { Component, OnInit } from '@angular/core';

import { Title } from './title';
import { XLarge } from './x-large';

@Component({
  selector: 'home',
  providers: [
    Title
  ],
  directives: [
    XLarge
  ],
  pipes: [ ],
  styles: [ require('./home.css') ],
  template: require('./home.html')
})
export class Home implements OnInit {
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public title: Title) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
  }

  submitState(value) {
    console.log('submitState', value);
    this.localState.value = '';
  }

}
