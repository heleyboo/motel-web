import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  private REST_API_SERVER = "/api/v1/categories";
  
  constructor(private httpClient: HttpClient) { }
  public getCategories(): Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER);
  }

}
