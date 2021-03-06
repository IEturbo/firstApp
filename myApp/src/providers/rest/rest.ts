import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "../../../node_modules/rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
// import {  } from 'rxjs/operator/map';
import { catchError, map } from "rxjs/operators";
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
  //feed
  private apiUrlFeeds = "https://imoocqa.gugujiankong.com/api/feeds/get";

  //account
  private apiUrlRegister =
    "https://imoocqa.gugujiankong.com/api/account/register";
  private apiUrlLogin = "https://imoocqa.gugujiankong.com/api/account/login";
  private apiUrlUserInfo =
    "https://imoocqa.gugujiankong.com/api/account/userinfo";
  private apiUrlUpdateNickName =
    "https://imoocqa.gugujiankong.com/api/account/updatenickname";

  private apiGetUserQuestionList =
    "https://imoocqa.gugujiankong.com/api/account/getuserquestionlist";

  //question
  private apiUrlQuestionSave =
    "https://imoocqa.gugujiankong.com/api/question/save";
  private apiUrlQuestionList =
    "https://imoocqa.gugujiankong.com/api/question/list?index=1&number=10";
  private apiUrlGetQuestion =
    "https://imoocqa.gugujiankong.com/api/question/get";
  private apiUrlGetQuestionWithUser =
    "https://imoocqa.gugujiankong.com/api/question/getwithuser";
  private apiUrlAnswer = "https://imoocqa.gugujiankong.com/api/question/answer";
  private apiUrlSaveFavourite =
    "https://imoocqa.gugujiankong.com/api/question/savefavourite";

  //notification
  private apiUrlUserNotifications =
    "https://imoocqa.gugujiankong.com/api/account/usernotifications";
  // 登录
  login(mobile, password) {
    return this.getUrlReturn(
      this.apiUrlLogin + "?mobile=" + mobile + "&password=" + password
    );
  }

  register(mobile, nickname, password) {
    return this.getUrlReturn(
      this.apiUrlRegister +
        "?mobile=" +
        mobile +
        "&nickname=" +
        nickname +
        "&password=" +
        password
    );
  }
  getUserinfo(userId) {
    return this.getUrlReturn(this.apiUrlUserInfo + "?userid=" + userId);
  }

  updateUserNickName(userId,nickName){
    return this.getUrlReturn(this.apiUrlUpdateNickName+"?userid=" + userId+"&nickname="+nickName)
  }

  /**
   *全局获取HTTP方法
   *
   * @private
   * @param {string} url
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   */
  private getUrlReturn(url: string, query?: any): Observable<Response> {
    return this.http.get(url).pipe(
      map((res: any) => JSON.parse(res)),
      catchError(Response => this.handleError(Response))
    );

    // .map(this.extractionData)
    // .catch(this.handleError);
  }
  private extractionData(res: Response) {
    return res || {};
    // let body = res.json();
    // return JSON.parse(body) || {};
  }
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || "";
      const err = body || JSON.stringify(body);
      errMsg = `${error.status}-${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
