import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formData: FormGroup;
  errors: any = [];
  constructor(private auth: AuthService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();

  }


  initForm(): void {
    this.formData = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });
  }
    register(): void {

      this.errors = [];
      console.log(this.formData);
      this.auth.register(this.formData.value)
        .subscribe(() => {
          this.router.navigate(['/auth/login'], { queryParams: { registered: 'success' } });
        },
          (errorResponse) => {
            console.log(errorResponse);
            this.errors.push(errorResponse.error.error);

          });
    }

}
