import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Race} from "../_models/Race";
import {environment} from "../../environments/environment";
import {Driver} from "../_models/Driver";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private endpoint = '/driver';

  constructor(private http: HttpClient) {
  }

  public getDriverById(driverId: number, season?: number): Observable<Driver> {
    let url = `${environment.api + this.endpoint}/${driverId}`;
    if (season) {
      url += `?season=${season}`;
    }
    return this.http.get<Driver>(url);
  }

}
