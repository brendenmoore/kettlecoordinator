import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ringer } from 'src/app/models/ringer.model';
import { RingerService } from 'src/app/services/ringer.service';

@Component({
  selector: 'app-ringers',
  templateUrl: './ringers.component.html',
  styleUrls: ['./ringers.component.css']
})
export class RingersComponent implements OnInit {

  ringers: Ringer[];
  columnsToDisplay: string[] = ['firstName', 'lastName'];
  selected: Ringer = null;
  isLoading: boolean = false;

  constructor(public ringerService: RingerService) { }

  ngOnInit(): void {
    this.getRingers();
  }

  getRingers(){
    this.isLoading = true;
    this.ringerService.findAll().subscribe(ringers => {
      this.isLoading = false;
      this.ringers = ringers;
    });
  }


}
