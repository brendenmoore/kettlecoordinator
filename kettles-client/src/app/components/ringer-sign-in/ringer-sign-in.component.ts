import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { startWith, map,} from 'rxjs/internal/operators';
import { Ringer } from 'src/app/models/ringer';
import { RingerService } from 'src/app/services/ringer.service';

@Component({
  selector: 'app-ringer-sign-in',
  templateUrl: './ringer-sign-in.component.html',
  styleUrls: ['./ringer-sign-in.component.css']
})
export class RingerSignInComponent implements OnInit {

  form = new FormControl();
  ringers: Ringer[] = [];
  filteredOptions: Observable<Ringer[]>;
  signIns: Ringer[] = [];

  constructor(public ringerService: RingerService) { }

  ngOnInit() {
    this.getRingers();
    this.filteredOptions = this.form.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.getFullName()),
      map(name => name ? this._filter(name) : this.ringers.slice())
    );


  }

  getRingers(){
    // this.ringerService.findAll().subscribe(res => {
    //   this.ringers.push(...res);
    // });
    let newRinger: Ringer = new Ringer();
    newRinger.firstName = "Test";
    newRinger.lastName = "FullName";

    let newRinger2: Ringer = new Ringer();
    newRinger2.firstName = "Brenden";
    newRinger2.lastName = "Moore";

    this.ringers.push(newRinger);
    this.ringers.push(newRinger2);
  }

  displayFn(ringer: Ringer): string {
    return ringer && ringer.getFullName() ? ringer.getFullName() : '';
  }

  private _filter(value: string): Ringer[] {
    const filterValue = value.toLowerCase();


    return this.ringers.filter(ringer => ringer.getFullName().toLowerCase().includes(filterValue));
  }

  @ViewChild("search") searchField: ElementRef
  addSignIn() {
    const ringer = this.form.value;
    this.signIns.push(ringer);
    this.form.reset("");
    this.searchField.nativeElement.focus();
  }
}
