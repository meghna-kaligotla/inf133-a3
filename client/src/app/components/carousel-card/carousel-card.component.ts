import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';
import { ArtistPageComponent } from 'src/app/pages/artist-page/artist-page.component';
import { AlbumPageComponent } from 'src/app/pages/album-page/album-page.component';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {
  category:string;
	name:string;
	imageURL:string;
	id:string;
	url:string;

  @Input() resource:ResourceData;

  constructor() { }

  ngOnInit() {
    this.id = this.resource.id;
    this.name = this.resource.name;
    this.category = this.resource.category;
    if (this.category == "track"){
      this.url = "/track/" + this.id;
    }else if (this.category == "artist"){
      this.url = "/artist/" + this.id;
    }else if (this.category == "album"){
      this.url = "/album/" + this.id;
    }
    console.log(this.url);
    this.imageURL = this.resource.imageURL;
  }

}
