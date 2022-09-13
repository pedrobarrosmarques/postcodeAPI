import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
  searches: string[]=[];

  constructor() { }

  /*add search to search history and removes the oldest search if length>3 */
  addSearch(search:string){
    if(this.searches.length === 3){
      this.searches.shift();
    }
    this.searches.push(search);
  }

  /* clears search history */
  clear(){
    this.searches = [];
  }
}
