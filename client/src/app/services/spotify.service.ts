import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArtistData } from '../data/artist-data';
import { AlbumData } from '../data/album-data';
import { TrackData } from '../data/track-data';
import { ResourceData } from '../data/resource-data';
import { ProfileData } from '../data/profile-data';
import { TrackFeature } from '../data/track-feature';
import { PlaylistData } from '../data/playlist-data';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
	expressBaseUrl:string = 'http://localhost:8888';

  constructor(private http:HttpClient) { }

  private sendRequestToExpress(endpoint:string):Promise<any> {
    //TODO: use the injected http Service to make a get request to the Express endpoint and return the response.
    //the http service works similarly to fetch(). It may be useful to call .toPromise() on any responses.
    //update the return to instead return a Promise with the data from the Express server
    let httpRequest = this.http.get(this.expressBaseUrl+endpoint).toPromise();
    return Promise.resolve(httpRequest);
  }

  aboutMe():Promise<ProfileData> {
    //This line is sending a request to express, which returns a promise with some data. We're then parsing the data 
    return this.sendRequestToExpress('/me').then((data) => {
      return new ProfileData(data);
    });
  }

  searchFor(category:string, resource:string):Promise<ResourceData[]> {
    //let resources:ResourceData[];
    var encodedResource = encodeURIComponent(resource);
    var requestString = '/search/' + category + "/" + encodedResource;
    console.log(requestString);
    return this.sendRequestToExpress(requestString).then(
      (data)=>{
        console.log("api returned value");
        if (category == "artist"){
          console.log("artist");
          let artistInfo:ArtistData[];
          artistInfo = data['artists']['items'].map((artist) => {
            return new ArtistData(artist);
          })
          console.log(artistInfo);
          return artistInfo;

        } else if (category == "track"){
          let trackInfo:TrackData[];
          trackInfo = data['tracks']['items'].map((track) => {
            return new TrackData(track);
          })
          return trackInfo;

        } else if (category == "album"){
          let albumInfo:AlbumData[];
          albumInfo = data['albums']['items'].map((album) => {
            return new AlbumData(album);
          })
          return albumInfo;
          
        }
    });
    //TODO: identify the search endpoint in the express webserver (routes/index.js) and send the request to express.
    //Make sure you're encoding the resource with encodeURIComponent().
    //Depending on the category (artist, track, album), return an array of that type of data.
    //JavaScript's "map" function might be useful for this, but there are other ways of building the array.
  }

  getArtist(artistId:string):Promise<ArtistData> {
    //TODO: use the artist endpoint to make a request to express.
    //Again, you may need to encode the artistId.
    var encodedResource = encodeURIComponent(artistId);
    var requestString = '/artist/' + encodedResource;
    return this.sendRequestToExpress(requestString).then(
      (data)=>{
        return new ArtistData(data);
      });
  }

  getRelatedArtists(artistId:string):Promise<ArtistData[]> {
    var encodedResource = encodeURIComponent(artistId);
    var requestString = '/artist-related-artists/' + encodedResource;
    return this.sendRequestToExpress(requestString).then((data) => {
      let artistInfo = data['artists'].map((artist)=>{
        return new ArtistData(artist);
      });
      return artistInfo; 
    });
  }

  getTopTracksForArtist(artistId:string):Promise<TrackData[]> {
    var encodedResource = encodeURIComponent(artistId);
    var requestString = '/artist-top-tracks/' + encodedResource;
    return this.sendRequestToExpress(requestString).then((data) => {
      let trackInfo = data['tracks'].map((track)=>{
        return new TrackData(track);
      });
      return trackInfo; 
    });
  }

  getAlbumsForArtist(artistId:string):Promise<AlbumData[]> {
    var encodedResource = encodeURIComponent(artistId);
    var requestString = '/artist-albums/' + encodedResource;
    return this.sendRequestToExpress(requestString).then((data) => {
      let albumInfo = data['items'].map((album)=>{
        return new AlbumData(album);
      });
      return albumInfo; 
    });
  }

  getAlbum(albumId:string):Promise<AlbumData> {
    //TODO: use the album endpoint to make a request to express.
    var encodedResource = encodeURIComponent(albumId);
    var requestString = '/album/' + encodedResource;
    return this.sendRequestToExpress(requestString).then(
      (data)=>{
        return new AlbumData(data);
      });
  }

  getTracksForAlbum(albumId:string):Promise<TrackData[]> {
    //TODO: use the tracks for album endpoint to make a request to express.
    var encodedResource = encodeURIComponent(albumId);
    var requestString = '/album-tracks/' + encodedResource;
    return this.sendRequestToExpress(requestString).then((data) => {
      let trackInfo = data['items'].map( (track)=> {
        return new TrackData(track);
      });
      return trackInfo;
    });
  }

  getTrack(trackId:string):Promise<TrackData> {
    //TODO: use the track endpoint to make a request to express.
    var encodedResource = encodeURIComponent(trackId);
    var requestString = '/track/' + encodedResource;
    return this.sendRequestToExpress(requestString).then(
      (data)=>{
        return new TrackData(data);
      });
  }

  getAudioFeaturesForTrack(trackId:string):Promise<TrackFeature[]> {
    //TODO: use the audio features for track endpoint to make a request to express.
    var encodedResource = encodeURIComponent(trackId);
    var requestString = '/track-audio-features/' + encodedResource;
    return this.sendRequestToExpress(requestString).then((data) => {
      let trackInfo:TrackFeature[] =[];
      trackInfo.push(new TrackFeature("acousticness", data["acousticness"]) );
      trackInfo.push(new TrackFeature("energy", data["energy"]));
      trackInfo.push(new TrackFeature("danceability", data["danceability"]));
      trackInfo.push(new TrackFeature("instrumentalness", data["instrumentalness"]));
      trackInfo.push(new TrackFeature("speechiness", data["speechiness"]));
      trackInfo.push(new TrackFeature("liveness", data["liveness"]));
      trackInfo.push(new TrackFeature("valence", data["valence"]));
      return trackInfo;
    });
  }
}
