import { Component, Input } from '@angular/core';
import { ICurrentShow } from '../icurrent-show';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent{
  @Input() show: ICurrentShow
  
  constructor () {
    this.show = {
      name: '',
      language: '',
      genres: '', 
      image: '',
      summary:'',
      rating:0,
      officialSite:''
    }
  }
  
}