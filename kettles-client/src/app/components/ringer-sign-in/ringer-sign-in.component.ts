import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map,} from 'rxjs/internal/operators';

@Component({
  selector: 'app-ringer-sign-in',
  templateUrl: './ringer-sign-in.component.html',
  styleUrls: ['./ringer-sign-in.component.css']
})
export class RingerSignInComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three', 'Brenden Moore', 'Jonathan Boiney', "John F. Kennedy"];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
