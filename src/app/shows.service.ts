import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ICurrentShowData } from './icurrent-show-data';
import { ICurrentShow } from './icurrent-show';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private httpClient:HttpClient) { }
  getTvShow(showName:string){

    return this.httpClient.get<ICurrentShowData>(`https://api.tvmaze.com/singlesearch/shows?q=${showName}`).pipe(map(data=>this.transformToICurrentShow(data)));
  }
  private transformToICurrentShow(data: ICurrentShowData):ICurrentShow{
  
    return{
      name:data.name,
      language:data.language,
      genres:data.genres.join(","),   //changing from array to list seperated by ","
      image:data.image.medium,
      summary:data.summary.replace(/<[^>]*>?/gm, ''),   //Removing <p> tags from summary
      rating:data.rating.average,
      officialSite:data.officialSite
    }
    
  }
   }

