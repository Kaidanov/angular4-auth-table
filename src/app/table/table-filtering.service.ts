import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {



  constructor(public http: HttpClient) {}

  getData(from?, to?) {
    return  this.http.get('https://api.myjson.com/bins/1acq1v');
  }

}
