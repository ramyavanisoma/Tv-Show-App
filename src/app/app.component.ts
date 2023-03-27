import { Component } from '@angular/core';
import { ICurrentShow } from './icurrent-show';
import { ShowsService } from './shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tv-Show-App';

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
  }

 doSearch(searchValue:string){
    const userInput=searchValue;
    this.ShowsService.getTvShow(userInput).subscribe(data=>this.show = data)}
}
