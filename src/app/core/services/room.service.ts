import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../http/room';
import { Filter } from '../http/request/filter';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private REST_API_SERVER = "/api/v1/rooms";

  constructor(private httpClient: HttpClient) { }

  public createRoom(data: Room): Observable<any> {
    return this.httpClient.post(this.REST_API_SERVER, data);
  }

  public getPostedRoomsByUser(userName: string): Observable<any> {
    // string(primitive) | String (wrapper object)
    let params = new HttpParams().set('userName', userName);
    return this.httpClient.get(this.REST_API_SERVER + "/by-user", {params: params});
  }

  public getRooms(pageNum: number, pageSize: number): Observable<any> {
    let parameters = new HttpParams()
    .set('pageNum', pageNum.toString())
    .set('pageSize', pageSize.toString());
    return this.httpClient.get(this.REST_API_SERVER, {params: parameters});
  }

  public searchRooms(pageNum: number, pageSize: number, params: Filter): Observable<any> {
    let parameters = new HttpParams()
    .set('pageNum', pageNum.toString())
    .set('pageSize', pageSize.toString())
    .set('minPrice', params.minPrice)
    .set('maxPrice', params.maxPrice)
    .set('minArea', params.minArea)
    .set('maxArea', params.maxArea)
    .set('wardCode', params.wardCode)
    .set('districtCode', params.districtCode)
    .set('provinceCode', params.provinceCode)
    .set('doorDirection', params.doorDirection)
    .set('balconyDirection', params.balconyDirection)
    .set('category', params.category)
    ;

    return this.httpClient.get(this.REST_API_SERVER, {params: parameters});
  }

  public getRoomById(roomId: number): Observable<any> {
    return this.httpClient.get(`${this.REST_API_SERVER}/${roomId}`);
  }
}
