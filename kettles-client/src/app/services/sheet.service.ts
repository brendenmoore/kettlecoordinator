import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ringer } from '../models/ringer.model';
import { Sheet } from '../models/sheet.model';
import { SignIn } from '../models/signIn.model';

export class SheetService {

  sheetAdded = new EventEmitter<Sheet[]>();
  signInAdded = new EventEmitter<Sheet>();

  private mockSheets: Sheet[] = [
    new Sheet(1, "November 21"),
    new Sheet(2, "November 23")
  ];

  public findAll(): Observable<Sheet[]> {
    return new Observable((observer)=>{
      observer.next(this.mockSheets.slice());
    })
  }

  public findById(id: number): Sheet {
    return this.mockSheets.slice().filter(sheet => sheet.id === id)[0];
  }

  public add(date: string){
    this.mockSheets.push(new Sheet(Date.now(), date));
    this.sheetAdded.emit(this.mockSheets.slice());
  }

  public addSignIn(sheetId: number, ringer: Ringer) {
    let sheet: Sheet = this.findById(sheetId);
    sheet.signIns.push(new SignIn(ringer));
    this.signInAdded.emit(sheet);
  }
}
