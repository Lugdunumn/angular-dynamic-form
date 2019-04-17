import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(
    private http: HttpClient
  ) { }

  get<T>(link, options?: object): Observable<T> {
    return this.http.get<T>(link, options)
      .pipe(
        catchError(err => {
          return throwError(err);
        })
      );
  }
}
