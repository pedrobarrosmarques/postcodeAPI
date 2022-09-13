import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostcodeApiService {
 apiUrl = 'http://api.postcodes.io/postcodes/';


  constructor(private http: HttpClient) { }

  getPostCodeDetails(postcode:string) : Observable<any> {
    return this.http.get<any>(this.apiUrl+postcode).pipe(map(response => response.result));
}
}
