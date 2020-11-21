import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RingerDTO } from 'src/app/DTO/ringerDTO';
import { Ringer } from 'src/app/models/ringer.model';
import { RingerService } from 'src/app/services/ringer.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-add-ringer',
  templateUrl: './add-ringer.component.html',
  styleUrls: ['./add-ringer.component.css']
})
export class AddRingerComponent implements OnInit, CanComponentDeactivate {

  firstName = '';
  lastName = '';
  phoneNumber = '';
  changesSaved: boolean = false;

  constructor(private ringerService:RingerService, private router:Router) {}

  ngOnInit(): void {
  }

  submitForm() {
    const ringer: RingerDTO = new RingerDTO(this.firstName, this.lastName, this.phoneNumber);
    this.ringerService.add(ringer)
      .subscribe(
        () => {
            console.log("Ringer Added");
            this.router.navigateByUrl('/ringers');
        }
      );
    this.changesSaved = true;
    this.router.navigateByUrl('/ringers');
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if (!this.changesSaved) {
      return confirm("Do you want to discard the changes?");
    }
    else {
      return true;
    }
  }

}
