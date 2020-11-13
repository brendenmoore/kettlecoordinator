import { Component, OnInit } from '@angular/core';
import { mockRecords } from 'src/app/mock-data/records';
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

  constructor() { }

  ngOnInit(): void {
  }

  onSelectStore(store: Store) {
    this.selectedStore === store ? this.selectedStore = null : this.selectedStore = store;
  }

  onRingerSelected(ringer: Ringer){
    this.selectedStore.ringer = ringer;
  }

}
