import { Component, OnInit } from '@angular/core';
import { SearchHistoryService } from '../services/search-history/search-history.service';
import { faX } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  xicon = faX;

  constructor(public SearchHistoryService: SearchHistoryService) { }

  ngOnInit(): void {
  }

}
