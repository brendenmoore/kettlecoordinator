import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
              private sheetService: SheetService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRingers();
    this.route.params.subscribe(params => {
      this.getSheet(params['id']);
    })
    this.sheetService.signInAdded.subscribe(sheet => {
      this.sheet = sheet;
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
    this.sheet = this.sheetService.findById(Number(id));
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
