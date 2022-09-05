import {CircuitPicture} from "./CircuitPicture";
import {CountryPicture} from "./CountryPicture";

export class Circuit {

  circuitId: number;
  circuitRef: string;
  name: string;
  location: string;
  country: string;
  lat: number;
  lng: number;
  alt: number;
  url: string;
  pictures: CircuitPicture;
  countryPictures: CountryPicture;

}
