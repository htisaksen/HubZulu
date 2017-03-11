import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WxService{
  http:any;
  baseUrl: String;

  constructor(http:Http){
    this.http = http;
    this.baseUrl = 'https://localhost:3005';
  }

  getLatestMetar(ICAO){
    return this.http.get(this.baseUrl + '/api/metar'+ICAO)
    .map(res => res.json());
  }
}
