import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explanation-container',
  templateUrl: './explanation-container.component.html',
  styleUrls: ['./explanation-container.component.css']
})
export class ExplanationContainerComponent implements OnInit {
  // private pic1 = './assets/firebase1.png';
  // private pic2 = './assets/firebase2.png';
  // private pic3 = './assets/firebase3.png';
  // private pic4 = './assets/firebase4.png';
  // private pic5 = './assets/firebase5.png';
  // private pic6 = './assets/firebase6.png';
  // private pic7 = './assets/firebase7.png';
  // private pic8 = './assets/firebase7.png';

  private pic1 = require('./assets/firebase1.png');
  private pic2 = require('./assets/firebase2.png');
  private pic3 = require('./assets/firebase3.png');
  private pic4 = require('./assets/firebase4.png');
  private pic5 = require('./assets/firebase5.png');
  private pic6 = require('./assets/firebase6.png');
  private pic7 = require('./assets/firebase7.png');
  private pic8 = require('./assets/firebase8.png');
  private pic9 = require('./assets/firebase9.png');


  constructor() { }

  ngOnInit() {
  }

}
