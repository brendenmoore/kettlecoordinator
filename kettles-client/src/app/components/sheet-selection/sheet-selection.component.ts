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

  constructor(private sheetService: SheetService, private router: Router) { }

  ngOnInit(): void {
    this.sheetService.findAll().subscribe(res => {
      this.sheets = res;
    })
  }

  goTo(sheet: Sheet){
    this.sheetService.activeId = sheet.id;
    this.router.navigateByUrl('/sheet');
  }

}
