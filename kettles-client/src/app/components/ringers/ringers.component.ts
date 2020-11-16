import { Component, OnInit } from '@angular/core';
import { Ringer } from 'src/app/models/ringer.model';
import { RingerService } from 'src/app/services/ringer.service';

@Component({
  selector: 'app-ringers',
  templateUrl: './ringers.component.html',
  styleUrls: ['./ringers.component.css']
})
export class RingersComponent implements OnInit {

  ringers: Ringer[] = [];
  columnsToDisplay: string[] = ['firstName', 'lastName'];
  selected: Ringer = null;

  constructor(public ringerService: RingerService) { }

  ngOnInit(): void {
    this.getRingers();
  }

  getRingers(){
    this.ringerService.findAll().subscribe(res => {
      this.ringers.push(...res);
    })
  }


}
