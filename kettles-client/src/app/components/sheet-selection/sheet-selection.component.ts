import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sheet } from 'src/app/models/sheet.model';
import { SheetService } from 'src/app/services/sheet.service';

@Component({
  selector: 'app-sheet-selection',
  templateUrl: './sheet-selection.component.html',
  styleUrls: ['./sheet-selection.component.css']
})
export class SheetSelectionComponent implements OnInit {

  sheets: Sheet[];
  model: {
    year: number,
    month: number,
    day: number
  };

  constructor(private sheetService: SheetService, private router: Router) { }

  ngOnInit(): void {
    this.sheetService.findAll().subscribe(res => {
      this.sheets = res;
    });
    this.sheetService.sheetAdded.subscribe(res => {
      this.sheets = res;
    })
  }

  goTo(sheet: Sheet){
    this.sheetService.activeId = sheet.id;
    this.router.navigate(['/sheets', sheet.id]);
  }

  addSheet() {
    this.sheetService.add(this.model.month + "/" + this.model.day + "/" + this.model.year);
  }

}
