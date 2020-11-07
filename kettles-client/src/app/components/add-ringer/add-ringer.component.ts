import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Ringer } from 'src/app/models/ringer';
import { RingerService } from 'src/app/services/ringer.service';

@Component({
  selector: 'app-add-ringer',
  templateUrl: './add-ringer.component.html',
  styleUrls: ['./add-ringer.component.css']
})
export class AddRingerComponent implements OnInit {

  form = this.fb.group({
    firstName: [''],
    lastName: [''],
    phoneNumber: ['']
  });
  ringer: Ringer = new Ringer();

  constructor(private fb:FormBuilder, private ringerService:RingerService, private router:Router) {}

  ngOnInit(): void {
  }

  submitForm() {
    this.ringer.userId = 1;
    this.ringerService.add(this.ringer)
      .subscribe(
        () => {
            console.log("Ringer Added");
            this.router.navigateByUrl('/ringers');
        }
      );
    this.router.navigateByUrl('/ringers');
  }

}
