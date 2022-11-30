import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ProfileData } from 'src/app/data/profile-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string = null;
  profile_pic:string = "../../../assets/unknown.jpg";
  profile_link:string = null;
  load:boolean;
  location:Location;

  //TODO: inject the Spotify service
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */

  public aboutMe() {
    console.log("aboutMe is running");
    this.spotifyService.aboutMe().then(
      aboutMeInfo=>{
    this.name = aboutMeInfo.name;
    this.profile_pic = aboutMeInfo.imageURL;
    this.profile_link = aboutMeInfo.spotifyProfile;
    });
  } 
  public loadInfo(){
    this.load = true;
    console.log("Attempting to load info");
    document.getElementById("about").click();
    this.aboutMe();
    console.log(this.profile_link)
    document.getElementById("name").innerText = this.name;
    (document.getElementById('pic') as HTMLImageElement).src  = this.profile_pic
  }

  public openProfile(){
    console.log("Attempting to go to profile on spotify");
    console.log(this.profile_link);
    document.getElementById("profile").click();
    
  }

}
