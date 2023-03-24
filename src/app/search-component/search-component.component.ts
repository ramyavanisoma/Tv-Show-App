import { Component,Output,EventEmitter } from '@angular/core';
import{FormControl,Validators}from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {
@Output() searchEvent=new EventEmitter<string>();
search=new FormControl('', [Validators.minLength(2)]);
faSearchIcon= faMagnifyingGlass;
constructor() {}
  
  submitSearch()
  {
    var input = this.search;
    if (!input.invalid && input.value != null){
      this.searchEvent.emit(input.value);
    } 
  }

}
