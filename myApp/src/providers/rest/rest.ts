import { HttpClient, HttpResponse,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    // console.log('Hello RestProvider Provider');
  }
  /**
   *全局获取HTTP方法
   *
   * @private
   * @param {string} url
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   */
  private getUrlReturn(url: string): Observable<string[]> {
    return this.http.get(url)
      .map(this.extractionData)
      .catch(this.handleError);
  }
  private extractionData(res: any) {
    let body = res.json();
    return JSON.parse(body) || {};
  }
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || "";
      const err = body || JSON.stringify(body);
      errMsg = `${error.status}-${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);

  }
}
