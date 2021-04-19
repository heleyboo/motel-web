import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../http/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private REST_API_SERVER = "/api/v1/rooms";

  constructor(private httpClient: HttpClient) { }

  public createRoom(data: Room): Observable<any> {
    return this.httpClient.post(this.REST_API_SERVER, data);
  }

}
