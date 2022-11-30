import { ResourceData } from './resource-data';
import { ArtistData } from './artist-data';

export class PlaylistData extends ResourceData {
	genres:string[];
	artists:ArtistData[];

	constructor(objectModel:{}) {
		super(objectModel);
		this.category="playlist";

		this.genres = objectModel['genres'];

		this.artists = objectModel['artists'].map((artist) => {
			return new ArtistData(artist);
		});
	}
}
