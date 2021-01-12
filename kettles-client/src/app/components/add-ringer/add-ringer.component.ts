import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router } from '@angular/router';
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

  changesSaved: boolean = false;
  private mode = 'create';
  private ringerId: string;
  ringer: Ringer;

  constructor(private ringerService:RingerService, private router:Router, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.ringerId = paramMap.get('id');
        this.ringer = this.ringerService.getRinger(this.ringerId);
      } else {
        this.mode = 'create';
        this.ringerId = null;
        this.ringer = new Ringer("", "", "");
      }
      console.log('mode: ' + this.mode)
    })
  }

  onSubmit(form: NgForm) {
    const ringer: RingerDTO = new RingerDTO(form.value.firstName, form.value.lastName, form.value.phoneNumber);
    console.log(ringer)
    this.mode === 'create' ? this.ringerService.add(ringer) : this.ringerService.update(this.ringerId, ringer);
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
