import { Injectable } from '@angular/core';
import { Ringer } from '../models/ringer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RingerService {

  private ringersURL: string;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Ringer[]> {
    return this.http.get<Ringer[]>("api/1/ringers");
  }

}