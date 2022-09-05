import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DriverStanding} from '../_models/DriverStanding';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverStandingService {

  private endpoint = '/driverStandings';

  constructor(private http: HttpClient) {
  }

  public getTopFiveOfCurrentSeason(): Observable<DriverStanding[]> {
    return this.http.get<DriverStanding[]>(`${environment.api + this.endpoint}/top5`);
  }

  public getDriverStandingsBySeason(season?: number): Observable<DriverStanding[]> {
    let url = `${environment.api + this.endpoint}`;
    if (season) {
      url += `?season=${season}`;
    }
    return this.http.get<DriverStanding[]>(url);
  }

}
