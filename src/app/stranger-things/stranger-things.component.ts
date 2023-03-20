import { Component, OnInit } from '@angular/core';
import { ICurrentShow } from '../icurrent-show';

@Component({
  selector: 'app-stranger-things',
  templateUrl: './stranger-things.component.html',
  styleUrls: ['./stranger-things.component.css']
})
export class StrangerThingsComponent implements OnInit{
  
  show: ICurrentShow
  constructor () {
    this.show = {
      name: 'stranger things',
      language: 'english',
      genres: '', 
      image: '',
      summary: ''
    }
  }
  ngOnInit() {}
}