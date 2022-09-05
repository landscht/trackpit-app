import {DriverPicture} from "./DriverPicture";
import {DriverConstructor} from "./DriverConstructor";
import {Result} from "./Result";
import {DriverStanding} from "./DriverStanding";
import {DriverStats} from "./DriverStats";
import {Constructor} from "./Constructor";

export class Driver {

  driverId: number;
  driverRef: string;
  num: number;
  code: string;
  forename: string;
  surname: string;
  dob: Date;
  nationality: string;
  url: string;
  pictures: DriverPicture;
  driverConstructor: Constructor;
  lastTenRaces: Result[];
  lastTenDriverStandings: DriverStanding[];
  maxDriverStanding: number;
  stats: DriverStats;

}
