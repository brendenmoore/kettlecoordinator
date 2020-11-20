import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ringer } from 'src/app/models/ringer.model';
import { Sheet } from 'src/app/models/sheet.model';
import { SheetLocation } from 'src/app/models/sheetLocation.model';
import { SignIn } from 'src/app/models/signIn.model';
import { RingerService } from 'src/app/services/ringer.service';
import { SheetService } from 'src/app/services/sheet.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {

  sheet: Sheet;
  ringers: Ringer[];
  activeLocations: SheetLocation[];
  filteredRingers: SignIn[];
  formValue: string = '';

  //trying to focus input
  @ViewChild("searchInput") searchInput: ElementRef;

  constructor(private ringerService: RingerService,
              private sheetService: SheetService) { }

  ngOnInit(): void {
    this.getRingers();
    this.getSheet(1); // temp hardcoded ID
    this.sheetService.signInAdded.subscribe(res => {
      this.sheet = res;
      this.onFilter(this.formValue);
    })
    this.onFilter('');
    this.activeLocations = this.sheet.sheetLocations.filter(store => store.active);
  }

  getRingers(){
    this.ringerService.findAll().subscribe(res => {
      this.ringers = res;
    });
  }

  //temp
  getSheet(id: number){
    this.sheet = this.sheetService.findById(id);
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

  areAllAssigned() {
    return this.sheet.signIns.filter(si => !si.isAssigned).length === 0;
  }

  onFilter(value: string){
    const filterValue = value.toLowerCase();
    this.filteredRingers = this.sheet.signIns.filter(signIn => signIn.ringer.fullName.toLowerCase().includes(filterValue) && !signIn.isAssigned);
  }

}
