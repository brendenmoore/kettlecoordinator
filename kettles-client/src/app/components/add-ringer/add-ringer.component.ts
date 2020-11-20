import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RingerDTO } from 'src/app/DTO/ringerDTO';
import { Ringer } from 'src/app/models/ringer.model';
import { RingerService } from 'src/app/services/ringer.service';

@Component({
  selector: 'app-add-ringer',
  templateUrl: './add-ringer.component.html',
  styleUrls: ['./add-ringer.component.css']
})
export class AddRingerComponent implements OnInit {


  constructor(private ringerService:RingerService, private router:Router) {}

  ngOnInit(): void {
  }

  submitForm(firstName, lastName, phoneNumber) {
    const ringer: RingerDTO = new RingerDTO(firstName, lastName, phoneNumber);
    this.ringerService.add(ringer)
      .subscribe(
        () => {
            console.log("Ringer Added");
            this.router.navigateByUrl('/ringers');
        }
      );
    this.router.navigateByUrl('/ringers');
  }

}
