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
    this.getRingers();;
    this.filteredOptions = this.form.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.fullName),
      map(name => name ? this._filter(name) : this.ringers.slice())
    );


  }

  getRingers(){
    this.ringerService.findAll().subscribe(res => {
      this.ringers = res;
      console.log(res);
    });
  }

  displayFn(ringer: Ringer): string {
    return ringer && ringer.fullName ? ringer.fullName : '';
  }

  private _filter(value: string): Ringer[] {
    const filterValue = value.toLowerCase();

    return this.ringers.filter(ringer => ringer.fullName.toLowerCase().includes(filterValue));
  }
  addSignIn() {
    if(typeof this.form.value !== 'string') {
      const ringer = this.form.value;
      this.signIns.push(ringer);
      this.form.reset("");
    }
  }
}
