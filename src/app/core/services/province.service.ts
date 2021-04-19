import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { District } from '../http/district';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  private REST_API_SERVER = "/api/v1/provinces";
  constructor(private httpClient: HttpClient) { }

  public getProvinces(): Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER);
  }

}
