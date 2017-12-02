import { Component, OnInit } from '@angular/core';
import {FBaseService} from '../FireService.service';

@Component({
  selector: 'app-demo-fb',
  templateUrl: './demo-fb.component.html',
  styleUrls: ['./demo-fb.component.css']
})
export class DemoFbComponent implements OnInit {
  dato = [];
  receivedData = [];
  inpValue;
  constructor(private fBaseService: FBaseService) { }

  ngOnInit() {
  }

  onSendData(input) {
    console.log(input);
    this.dato.push({
      data: input
    });
    this.fBaseService.storeData(this.dato)
      .subscribe(
        (response) => {
          console.log('We send the data to firebase!!');
          console.log('hola');
          },
            (error) => console.log(error)
      );

  }

  onRetrieveData() {
    this.fBaseService.retrieveData()
      .subscribe(
        (response) => {
          const data = response.json();
          console.log(data);
          this.receivedData = data;
        },
        (error) => console.log(error)
      );
    console.log('We retrieve the data from firebase!!');
  }
}
