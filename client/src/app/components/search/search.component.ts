import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  searchString:string;
  searchCategory:string = 'artist';
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[];
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  public search() {
    console.log("search function running");
    this.spotifyService.searchFor(this.searchCategory, this.searchString).then(
     searchForInfo=>{
      this.resources = searchForInfo;
    });
  }

  public searchGesture(){
    console.log("Attempting to Search");
    document.getElementById("search").click();
  }


}
