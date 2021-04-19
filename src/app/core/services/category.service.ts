import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  public getCategories(): Observable<any> {
    return of([]);// Bình change
  }

}
