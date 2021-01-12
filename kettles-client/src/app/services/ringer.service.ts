import { Injectable } from '@angular/core';
import { Ringer } from '../models/ringer.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { RingerDTO } from '../DTO/ringerDTO';
import { RingersComponent } from '../components/ringers/ringers.component';
import { map } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class RingerService {

  private mockRingers: Ringer[] = [
    {
      id: "1",
      active: true,
      fullName: "Brenden Moore",
      firstName: "Brenden",
      lastName: "Moore",
      phoneNumber: "4195651790",
      notes: ""
    },
    {
      id: "2",
      active: true,
      fullName: "Sarah Moore",
      firstName: "Sarah",
      lastName: "Moore",
      phoneNumber: "5025106706",
      notes: "",
    },
    {
      id: "3",
      active: true,
      fullName: "Bat Man",
      firstName: "Bat",
      lastName: "Man",
      phoneNumber: "n/a",
      notes: "darkness, no parents",
    },
    {
      id: "4",
      active: true,
      fullName: "Donald Glover",
      firstName: "Donald",
      lastName: "Glover",
      phoneNumber: "987654321",
      notes: "",
    },
    {
      id: "4",
      active: true,
      fullName: "A Longer Name Goes Here",
      firstName: "A Longer",
      lastName: "Name Goes Here",
      phoneNumber: "987654321",
      notes: "",
    },
  ];
  private ringersUpdated = new Subject<Ringer[]>();
  private ringersURL: string;
  private ringers: Ringer[] = [];

  constructor(private http: HttpClient) {
  }

  public getRingerUpdateListener() {
    return this.ringersUpdated.asObservable();
  }

  public fetchRingers() {
    this.http.get<{message: String, ringers: any}>("http://localhost:3000/api/ringers")
      .pipe(map((body) => {
        return body.ringers.map(ringer => {
          return {
            firstName: ringer.firstName,
            lastName: ringer.lastName,
            phoneNumber: ringer.phoneNumber,
            fullName: ringer.firstName + " " + ringer.lastName,
            id: ringer._id
          }
        })
      }))
      .subscribe((ringers) => {
        this.ringers = ringers;
        this.ringersUpdated.next([...this.ringers]);
      });
  }

  public getRinger(id: string): Ringer{
    return {...this.ringers.find(r => r.id == id)}
  }

  public add(ringerDTO: RingerDTO){
    this.http.post<Ringer>("http://localhost:3000/api/ringers", ringerDTO)
      .subscribe(ringer => {
        this.ringers.push(ringer);
        this.ringersUpdated.next([...this.ringers])
      });
  }

  public update(id: string, ringerDTO: RingerDTO) {
    const ringer = {
      ...ringerDTO,
      id: id
    }
    console.log(ringer)
    this.http.put("http://localhost:3000/api/ringers/" + id, ringer)
      .subscribe(res => console.log(res));
  }

  public delete(ringer: Ringer): void {
    this.http.delete("http://localhost:3000/api/ringers/" + ringer.id)
      .subscribe(() => {
        const updatedRingers = this.ringers.filter(aRinger => aRinger.id !== ringer.id);
        this.ringers = updatedRingers;
        this.ringersUpdated.next([...this.ringers]);
      })
  }

}
