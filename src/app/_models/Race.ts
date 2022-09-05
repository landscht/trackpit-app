import {Circuit} from "./Circuit";
import {Time} from "@angular/common";
import {Result} from "./Result";
import {LapTime} from "./LapTime";
import {Qualifying} from "./Qualifying";
import {PitStop} from "./PitStop";

export class Race {

  raceId: number;
  year: number;
  round: number;
  circuit: Circuit;
  name: string;
  date: Date;
  time: Date;
  url: string;
  fp1Date: Date;
  fp1Time: Date;
  fp2Date: Date;
  fp2Time: Date;
  fp3Date: Date;
  fp3Time: Date;
  qualiDate: Date;
  qualiTime: Date;
  sprintDate: Date;
  sprintTime: Date;
  results: Result[];
  qualifying: Qualifying[];
  lapTimes: LapTime[];
  pitStops: PitStop[];

}
