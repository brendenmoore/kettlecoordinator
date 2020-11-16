import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/internal/operators';
import { MOCK_USER_DATA } from 'src/app/mock-data/mock';
import { mockRecords } from 'src/app/mock-data/records';
import { mockRingers } from 'src/app/mock-data/ringers';
import { mockStores } from 'src/app/mock-data/stores';
import { Ringer } from 'src/app/models/ringer.model';
import { Sheet } from 'src/app/models/sheet.model';
import { SheetLocation } from 'src/app/models/sheetLocation.model';
import { SignIn } from 'src/app/models/signIn.model';
import { Store } from 'src/app/models/store.model';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {

  sheet: Sheet = MOCK_USER_DATA.sheets[0];
  ringers: Ringer[] = MOCK_USER_DATA.ringers;
  activeLocations: SheetLocation[];
  signIns: SignIn[] = this.sheet.signIns;
  filteredRingers: SignIn[];
  formValue: string;

  //trying to focus input
  @ViewChild("searchInput") searchInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.onFilter('');
    this.activeLocations = this.sheet.sheetLocations.filter(store => store.active);
  }

  onRingerSelected(signIn: SignIn, store: SheetLocation){
    if (store.signIn) {
      store.signIn.isAssigned = false;
    }
    store.signIn = signIn;
    signIn.isAssigned = true;
    this.resetFilter();
  }

  resetFilter() {
    this.formValue = '';
    this.onFilter(this.formValue);
  }

  onRemoveRinger(store: SheetLocation){
    store.signIn.isAssigned = false;
    store.signIn = null;
    this.onFilter('');
  }

  onFilter(value: string){
    const filterValue = value.toLowerCase();
    this.filteredRingers = this.signIns.filter(signIn => signIn.ringer.fullName.toLowerCase().includes(filterValue) && !signIn.isAssigned);
  }

}
