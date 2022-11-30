import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { TrackFeature } from '../../data/track-feature';
import { SpotifyService } from 'src/app/services/spotify.service';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {
	trackId:string;
	track:TrackData;
  audioFeatures:TrackFeature[];
  trackUrl:string
  trackUrlSafe:SafeResourceUrl;


  constructor(private route: ActivatedRoute, private spotify:SpotifyService) { }

  ngOnInit() {
  	this.trackId = this.route.snapshot.paramMap.get('id');
    this.trackUrl = "https://open.spotify.com/embed/track/" + this.trackId;
    //document.getElementById("url").src = this.trackUrl;
    console.log(this.trackUrlSafe);
  	//TODO: Inject the spotifyService and use it to get the track data and it's audio features
    this.spotify.getTrack(this.trackId).then((data)=>{
      this.track = data;
    });
    this.spotify.getAudioFeaturesForTrack(this.trackId).then((data)=>{
      this.audioFeatures = data;
    });
  }

}
