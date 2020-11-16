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
  signIns: SignIn[];
  filteredRingers: Ringer[];
  formValue: string;

  //trying to focus input
  @ViewChild("searchInput") searchInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.filteredRingers = this.ringers;
  }

  onRingerSelected(ringer: Ringer, store: SheetLocation){
    store.ringer = ringer;
    this.resetFilter();
  }

  resetFilter() {
    this.formValue = '';
    this.onFilter();
  }

  onRemoveRinger(store: SheetLocation){
    store.ringer = null;
  }

  onFilter(){
    const filterValue = this.formValue.toLowerCase();

    this.filteredRingers = this.ringers.filter(ringer => ringer.fullName.toLowerCase().includes(filterValue));
  }

}
