import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Season} from "../_models/Season";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  public seasons: Season[] = [];

  private endpoint = '/season';

  constructor(private http: HttpClient) {
  }

  public initSeasons(): void {
    this.http.get<Season[]>(`${environment.api + this.endpoint}`).subscribe({
      next: (seasons: Season[]) => {
        this.seasons = seasons;
      }
    });
  }
}
