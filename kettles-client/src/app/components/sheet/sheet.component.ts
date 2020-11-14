import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/internal/operators';
import { mockRecords } from 'src/app/mock-data/records';
import { mockRingers } from 'src/app/mock-data/ringers';
import { mockStores } from 'src/app/mock-data/stores';
import { Ringer } from 'src/app/models/ringer';
import { Store } from 'src/app/models/store.model';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {

  stores = mockStores;
  records = mockRecords;
  selectedStore: Store = null;
  ringers = mockRingers;
  filteredRingers: Ringer[];
  formValue: string;


  constructor() { }

  ngOnInit(): void {
    this.filteredRingers = mockRingers;
  }

  onRingerSelected(ringer: Ringer, store: Store){
    store.ringer = ringer;
    this.formValue = '';
    this.onFilter();
  }

  onRemoveRinger(store: Store){
    store.ringer = null;
  }

  onFilter(){
    const filterValue = this.formValue.toLowerCase();

    this.filteredRingers = this.ringers.filter(ringer => ringer.fullName.toLowerCase().includes(filterValue));
  }


}
