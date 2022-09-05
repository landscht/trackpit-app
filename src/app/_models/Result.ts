import {Race} from "./Race";
import {Driver} from "./Driver";
import {Constructor} from "./Constructor";
import {StatusResult} from "./StatusResult";

export class Result {

  resultId: number;
  race: Race;
  driver: Driver;
  constructorModel: Constructor;
  num: number;
  grid: number;
  position: number;
  positionText: string;
  positionOrder: number;
  points: number;
  laps: number;
  time: string;
  milliseconds: number;
  fastestLap: number;
  rank: number;
  fastestLapTime: string;
  fastestLapSpeed: string;
  status: StatusResult;

}
