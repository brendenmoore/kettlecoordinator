import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidRegistration = false;
  registrationSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {}

  ngOnInit(): void {
  }

  handleRegistration() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result) => {
      this.invalidRegistration = false;
      this.registrationSuccess = true;
      this.successMessage = 'Registration Successful.';
      this.router.navigate(['/home']);
    }, () => {
      this.invalidRegistration = true;
      this.registrationSuccess = false;
    });
  }
}
