import { Injectable } from '@angular/core';
import { Ringer } from '../models/ringer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RingerDTO } from '../DTO/ringerDTO';


@Injectable({
  providedIn: 'root'
})
export class RingerService {

  private mockRingers: Ringer[] = [
    {
      id: 1,
      active: true,
      fullName: "Brenden Moore",
      firstName: "Brenden",
      lastName: "Moore",
      phoneNumber: "4195651790",
      notes: ""
    },
    {
      id: 2,
      active: true,
      fullName: "Sarah Moore",
      firstName: "Sarah",
      lastName: "Moore",
      phoneNumber: "5025106706",
      notes: "",
    },
    {
      id: 3,
      active: true,
      fullName: "Bat Man",
      firstName: "Bat",
      lastName: "Man",
      phoneNumber: "n/a",
      notes: "darkness, no parents",
    },
    {
      id: 4,
      active: true,
      fullName: "Donald Glover",
      firstName: "Donald",
      lastName: "Glover",
      phoneNumber: "987654321",
      notes: "",
    },
    {
      id: 4,
      active: true,
      fullName: "A Longer Name Goes Here",
      firstName: "A Longer",
      lastName: "Name Goes Here",
      phoneNumber: "987654321",
      notes: "",
    },
  ];

  private ringersURL: string;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Ringer[]> {
    // return this.http.get<Ringer[]>("api/ringers");
    return new Observable((observer) => {observer.next(this.mockRingers)})
  }

  public add(ringerDTO: RingerDTO) {
    // return this.http.post<RingerDTO>("api/ringers", ringerDTO);
    return new Observable((observer) => {
      this.mockRingers.push(new Ringer(ringerDTO.firstName, ringerDTO.lastName, ringerDTO.phoneNumber));
      observer.next(this.mockRingers)
    })

  }

}
