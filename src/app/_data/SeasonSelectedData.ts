import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Season} from "../_models/Season";

@Injectable()
export class SeasonSelectedData {
  public seasonSelected: BehaviorSubject<Season> = new BehaviorSubject<Season>(new Season());
}
