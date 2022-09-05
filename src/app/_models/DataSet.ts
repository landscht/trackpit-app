import {LapTime} from "./LapTime";
import {PitStop} from "./PitStop";

export class DataSet {

  data: LapTime[] | PitStop[] | number[];
  label: string;
  borderColor: string;
  backgroundColor: string;
  fill: boolean;
  hidden: boolean;

}
