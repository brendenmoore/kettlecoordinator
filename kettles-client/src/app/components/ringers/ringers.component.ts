import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Ringer } from 'src/app/models/ringer.model';
import { RingerService } from 'src/app/services/ringer.service';

@Component({
  selector: 'app-ringers',
  templateUrl: './ringers.component.html',
  styleUrls: ['./ringers.component.css']
})
export class RingersComponent implements OnInit, OnDestroy {

  ringers: Ringer[] = [];
  columnsToDisplay: string[] = ['firstName', 'lastName'];
  selected: Ringer = null;
  isLoading: boolean = false;
  private ringerSub: Subscription;

  constructor(public ringerService: RingerService) { }

  ngOnInit(): void {
    this.getRingers();
  }

  ngOnDestroy(): void {
    this.ringerSub.unsubscribe();
  }

  getRingers(){
    // this.isLoading = true;
    this.ringerService.fetchRingers();
    this.ringerSub = this.ringerService.getRingerUpdateListener()
      .subscribe((ringers: Ringer[]) => {
        console.log(ringers)
        // this.isLoading = false;
        this.ringers = ringers;
      });
  }

  onDelete(ringer: Ringer){
    this.ringerService.delete(ringer);
  }


}
