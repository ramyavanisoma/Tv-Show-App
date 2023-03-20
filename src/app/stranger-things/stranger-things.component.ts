import { Component, OnInit } from '@angular/core';
import { ICurrentShow } from '../icurrent-show';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-stranger-things',
  templateUrl: './stranger-things.component.html',
  styleUrls: ['./stranger-things.component.css']
})
export class StrangerThingsComponent implements OnInit{
  
  show: ICurrentShow
  constructor (private ShowsService:ShowsService) {
    this.show = {
      name: '',
      language: '',
      genres: '', 
      image: '',
      summary: '',
      rating:0,
      officialSite:''
    }
    this.ShowsService.getTvShow('kjdfhkd').subscribe(data=>this.show=data);
  }
  ngOnInit() {}
}