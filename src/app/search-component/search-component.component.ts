import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {Validators,FormControl} from '@angular/forms'

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit   {
  search=new FormControl('',[Validators.minLength(3)])

faSearchIcon= faMagnifyingGlass;

constructor() {}

  ngOnInit(): void {}
}
