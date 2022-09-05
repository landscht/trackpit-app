import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Race} from "../_models/Race";
import {environment} from "../../environments/environment";
import {SeasonRaces} from "../_models/SeasonRaces";
import {SeasonSelectedData} from "../_data/SeasonSelectedData";

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private endpoint = '/race';

  constructor(private http: HttpClient) {
  }

  public getRaceById(raceId: number): Observable<Race> {
    return this.http.get<Race>(`${environment.api + this.endpoint}/${raceId}`);
  }

  public getNextRace(): Observable<Race> {
    return this.http.get<Race>(`${environment.api + this.endpoint}/next`);
  }

  public getRacesByYear(year: number): Observable<Race[]> {
    return this.http.get<Race[]>(`${environment.api + this.endpoint}/year/${year}`);
  }

  public getLastRace(): Observable<Race> {
    return this.http.get<Race>(`${environment.api + this.endpoint}/last`);
  }

  public getSeasonRacesByYear(season?: number): Observable<SeasonRaces> {
    let url = `${environment.api + this.endpoint}/season`;
    if (season) {
      url += `?season=${season}`;
    }
    return this.http.get<SeasonRaces>(url);
  }

}
