import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  hide: boolean = true;

  constructor(private fb:FormBuilder,
               private authService: AuthService,
               private router: Router) {

      this.form = this.fb.group({
          username: ['',Validators.required],
          password: ['',Validators.required]
      });
  }

  ngOnInit(): void {
  }

  handleRegistration() {
    const val = this.form.value

    if (val.username && val.password) {
      this.authService.signUp(val.username, val.password)
          .subscribe(
              () => {
                  console.log("User is signed up");
                  this.authService.login(val.username, val.password).
                  subscribe(
                    () => {
                      console.log("User is signed in")
                      this.router.navigateByUrl('/home');
                    }
                  )
              }
          );
    }
  }


}
