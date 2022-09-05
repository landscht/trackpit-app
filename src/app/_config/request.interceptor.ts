import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {SeasonService} from "../_services/season.service";
import {SeasonSelectedData} from "../_data/SeasonSelectedData";
import {Season} from "../_models/Season";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  private SEASON_PARAM = 'season';
  private seasonSelectedLocal: Season;

  constructor(private seasonSelectedData: SeasonSelectedData) {
    this.seasonSelectedData.seasonSelected.subscribe( value => {
      this.seasonSelectedLocal = value;
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.seasonSelectedLocal) {
      const newRequest = request.clone({
        params: (request.params ? request.params : new HttpParams())
          .set(this.SEASON_PARAM, this.seasonSelectedLocal.year)
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }

}
