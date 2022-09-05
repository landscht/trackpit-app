import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Result} from "../_models/Result";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private endpoint = '/result';

  constructor(private http: HttpClient) {
  }

  public getResultsOfLastRace(): Observable<Result[]> {
    return this.http.get<Result[]>(`${environment.api + this.endpoint}/last`);
  }

}
