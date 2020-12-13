import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface AppServiceInterface {
  hackID: String;
  endpointSuffix: String;
}

@Injectable({
  providedIn: 'root'
})
export default class AppService implements AppServiceInterface {
  hackID: String;
  endpointSuffix: String;

  constructor(private http: HttpClient) { }

  getStatus<T>() {
    return this.http.get<T>("/api/hack/" + this.hackID + "/info/" + this.endpointSuffix)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getConfigs<T>() {
    return this.http.get<T>("/api/hack/" + this.hackID + "/config/" + this.endpointSuffix)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
