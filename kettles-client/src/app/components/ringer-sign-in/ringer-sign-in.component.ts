import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map,} from 'rxjs/internal/operators';
import { Ringer } from 'src/app/models/ringer.model';
import { Sheet } from 'src/app/models/sheet.model';
import { RingerService } from 'src/app/services/ringer.service';
import { SheetService } from 'src/app/services/sheet.service';

@Component({
  selector: 'app-ringer-sign-in',
  templateUrl: './ringer-sign-in.component.html',
  styleUrls: ['./ringer-sign-in.component.css']
})
export class RingerSignInComponent implements OnInit {

  form = new FormControl();
  ringers: Ringer[] = [];
  filteredOptions: Observable<Ringer[]>;
  @Input() sheet: Sheet;

  constructor(private ringerService: RingerService, private sheetService: SheetService) { }

  ngOnInit() {
    this.getRingers();
    this.filteredOptions = this.form.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.fullName),
      map(name => name ? this._filter(name) : this.ringers.slice())
    );
  }

  getRingers(){
    this.ringerService.findAll().subscribe(res => {
      this.ringers = res;
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
      const ringer = {... this.form.value};
      this.sheetService.addSignIn(this.sheet.id, ringer);
      this.form.reset("");
    }
  }
}
