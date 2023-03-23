import { Component, Input } from '@angular/core';
import { ICurrentShow } from '../icurrent-show';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-stranger-things',
  templateUrl: './stranger-things.component.html',
  styleUrls: ['./stranger-things.component.css']
})
export class StrangerThingsComponent{
  
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
    this.ShowsService.getTvShow('girls').subscribe(data=>this.show=data);
  }
  ngOnInit():void {}
}