import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { UserToken } from '../../models/user-token.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  public onSubmit(): void {
    const credentials = this.form.getRawValue();
    this.authService
      .login(credentials)
      .pipe(first())
      .subscribe({
        next: (res: UserToken) => {
          console.log(res);
          localStorage.setItem('USER_TOKEN', res.token);
          localStorage.setItem('USER', JSON.stringify(res.user));
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
