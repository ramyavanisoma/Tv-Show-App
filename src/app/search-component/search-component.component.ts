import { Component, OnInit } from '@angular/core';
import { IShows } from '../ishows';
@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit   {

search: IShows
constructor() {
  this.search = {
    movies: 'all categories',
    documentaries: 'hitory',
    news: 'local and international',
    talkshow: 'family',
    sport: 'all categories',
    description: 'maturity rating',


  }
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
