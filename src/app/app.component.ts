import { Component, VERSION } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public title: string = 'Reactive Forms Demo';

  public formData: any = {};
  public showMessage: boolean = false;
  public uNameLength: number = 5;
  // public builder: FormBuilder;

  constructor(private builder: FormBuilder) {}

  userName = new FormControl('', [
    Validators.required,
    Validators.minLength(this.uNameLength),
    Validators.maxLength(10),
  ]);

  Email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.maxLength(10),
  ]);

  passwd = new FormControl('', [
    Validators.required,
    hasExclamationMark,
    //Validators.maxLength(10),
  ]);

  loginForm: FormGroup = this.builder.group({
    username: this.userName,
    password: this.passwd,
    email: this.Email,
  });

  ngOnInit(): void {}

  registerUser() {
    this.formData = this.loginForm.value;
    this.showMessage = true;
  }
}

function hasExclamationMark(input: FormControl) {
  const hasexclamation = input.value.indexOf('!') >= 0;

  return hasexclamation ? null : { needsExclamation: true };
}
