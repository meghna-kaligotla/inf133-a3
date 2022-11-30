import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from 'src/app/services/spotify.service';
import { PredictionEvent } from 'src/app/prediction-event';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {
	albumId:string;
	album:AlbumData;
	tracks:TrackData[];
  gesture: String = "";
  albumUrl:string;
  constructor(private route: ActivatedRoute, private spotify:SpotifyService) { }

  ngOnInit() {
  	this.albumId = this.route.snapshot.paramMap.get('id');
    this.albumUrl = "https://open.spotify.com/embed/album/" + this.albumId;
    console.log(this.albumUrl);
    console.log(this.albumId);
    
    //document.getElementById("url2").src = this.albumUrl;
  	//TODO: inject spotifyService and use it to get the album data and the tracks for the album
    this.spotify.getAlbum(this.albumId).then((data)=>{
      this.album = data;

    });
    this.spotify.getTracksForAlbum(this.albumId).then((data)=>{
      this.tracks= data;
    });

  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
  }

  public openAlbumPage(){
    document.getElementById("albumSpotify").click();
  }

}
