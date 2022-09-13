import { Component, OnInit } from '@angular/core';
import { PostcodeApiService } from '../services/postcodeAPI/postcode-api.service';
import { SearchHistoryService } from '../services/search-history/search-history.service';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchIcon = faMagnifyingGlassLocation;
  locations: any;
  searchHistory: string[] = [];
  kmToAirport?: number;
  milesToAirport?: number;
  distanceInKm: boolean = true;


  constructor(private postApiService: PostcodeApiService, public searchHistoryService: SearchHistoryService, public messageService: MessageService ) { }

  ngOnInit(): void {
  }

  /*get searched location details */
  getLocationDetails(postcode: string){
    this.messageService.clear();
    this.searchHistoryService.addSearch(postcode);
    this.postApiService.getPostCodeDetails(postcode).subscribe({
      next: (res) => {this.locations = res;
        this.kmToAirport = Math.floor(this.getDistanceFromAirportInKm(this.airportLatitude, this.airportLongitude, 
        this.locations.latitude, this.locations.longitude));
        this.milesToAirport = this.kmToMiles(this.kmToAirport)},
      error:()=> {
        this.messageService.add(this.messageService.error404)
        if(this.locations){
          this.locations = undefined;
        }
      }
    })
};

  /* This script calculates great-circle distances between the two points(London Heathrow and input location) – that is, the shortest 
  distance over the earth’s surface – using the ‘Haversine’ formula.*/
  airportLatitude = 51.4700223;
  airportLongitude = -0.4542955;
  getDistanceFromAirportInKm(airportLatitude:number ,airportLongitude:number, lat2:number, lon2:number) {
    let p = 0.017453292519943295;    // Math.PI / 180
    let c = Math.cos;
    let a = 0.5 - c((lat2 - airportLatitude) * p)/2 + 
          c(airportLatitude * p) * c(lat2 * p) * 
          (1 - c((lon2 - airportLongitude) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }

  /* transforms km in miles */
  kmToMiles(numInKm: number){
    return Math.floor(numInKm * 0.621371192);
  }

  /* Switch metrics displayed , km or miles. km if true, miles if false */
  switchMetrics(){
    this.distanceInKm = !this.distanceInKm;
  }

}
