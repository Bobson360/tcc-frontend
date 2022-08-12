import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signin = this.fb.group({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl(null, [Validators.required, Validators.min(3) ])
});

hide = true;
get emailInput() { return this.signin.get('email'); }
get passwordInput() { return this.signin.get('password'); }  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void{

  }

}
