import { Component, Input } from '@angular/core';
import { ICurrentShow } from '../icurrent-show';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent{
  @Input() show: ICurrentShow
  
  constructor () {
    this.show = {
      name: 'Young Sheldon',
      language: 'English,Telugu',
      genres: 'comedy,thriller', 
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/424/1060718.jpg',
      summary: "For young Sheldon Cooper, it isn't easy growing up in East Texas. Being a once-in-a-generation mind capable of advanced mathematics and science isn't always helpful in a land where church and football are king. And while the vulnerable, gifted and somewhat naïve Sheldon deals with the world, his very normal family must find a way to deal with him. His father, George, is struggling to find his way as a high school football coach and as father to a boy he doesn't understand. Sheldon's mother, Mary, fiercely protects and nurtures her son in a town where he just doesn't fit in. Sheldon's older brother, Georgie, does the best he can in high school, but it's tough to be cool when you're in the same classes with your odd younger brother. Sheldon's twin sister, Missy, sometimes resents all the attention Sheldon gets, but also remains the one person who can reliably tell Sheldon the truth. Finally, there's Sheldon's beloved Meemaw, his foul-mouthed, hard-drinking Texas grandmother who is very supportive of her grandson and his unique gifts. For 12 years on The Big Bang Theory, audiences have come to know the iconic, eccentric, and extraordinary Sheldon Cooper. This single-camera, half-hour comedy allows us the chance to meet him in childhood, as he embarks on his innocent, awkward, and hopeful journey toward the man he will become.",
      rating:8.9,
      officialSite:'https://v5.material.angular.io/components/grid-list/examples'
    }
  }
  ngOnInit():void {}
}