import { Component, Input } from '@angular/core';
import { ICurrentShow } from '../icurrent-show';
import { ShowsService } from '../shows.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-display-card',
  templateUrl: './display_card.component.html',
  styleUrls: ['./display_card.component.css']
})
export class DisplayCardComponent{
  @Input() show: ICurrentShow
  
  constructor () {
    this.show = {
      name: '',
      language: '',
      genres: '', 
      image: '',
      summary: '',
      rating:0,
      officialSite:''
    }
  }
  ngOnInit():void {}
}