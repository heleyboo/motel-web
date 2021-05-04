import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  private REST_API_SERVER = "/api/v1/directions";
  constructor(private httpClient: HttpClient) { }
  public getDirections() : Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
