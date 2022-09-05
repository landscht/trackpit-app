import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConstructorStanding} from '../_models/ConstructorStanding';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstructorStandingService {

  private endpoint = '/constructorStanding';

  constructor(private http: HttpClient) {
  }

  public getTopFiveOfCurrentSeason(): Observable<ConstructorStanding[]> {
    return this.http.get<ConstructorStanding[]>(`${environment.api + this.endpoint}/top5`);
  }

  public getConstructorStandingsOfCurrentSeason(season?: number): Observable<ConstructorStanding[]> {
    let url = `${environment.api + this.endpoint}`;
    if (season) {
      url += `?season=${season}`;
    }
    return this.http.get<ConstructorStanding[]>(url);
  }

}
