import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IShows } from '../ishows';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit   {


search: IShows
  faSearchIcon= faMagnifyingGlass;



constructor() {
  this.search = {
    movies: 'all categories',
    documentaries: 'history',
    news: 'local and international',
    talkshow: 'family',
    sport: 'all categories',
    description: 'maturity rating',


  }
}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
