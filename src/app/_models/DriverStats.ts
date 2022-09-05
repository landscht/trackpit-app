import {DriverStanding} from "./DriverStanding";
import {Season} from "./Season";

export class DriverStats {

  nbPitStops: number;
  nbRaces: number;
  nbPodiums: number;
  nbWins: number;
  nbInPoints: number;
  seasons: Season[];
  worldChampions: DriverStanding[];

}
