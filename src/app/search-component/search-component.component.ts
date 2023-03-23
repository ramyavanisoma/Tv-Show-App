import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import{FormControl}from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit   {
@Output() searchEvent=new EventEmitter<string>();
search=new FormControl('');
faSearchIcon= faMagnifyingGlass;
constructor() {}
  ngOnInit(): void {
  }

  submitSearch()
  {
    var input = this.search;
    if (input.value != null){
      this.searchEvent.emit(input.value);
    } 
  }

}
