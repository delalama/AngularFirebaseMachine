import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FBaseService {
  constructor(private http: Http) {}
  storeData(dates: any[]) {
    return this.http.put(
      'https://fir-demo-a34eb.firebaseio.com/data.json', dates);
  }
  retrieveData() {
    return this.http.get('https://fir-demo-a34eb.firebaseio.com/data.json');
  }
}
