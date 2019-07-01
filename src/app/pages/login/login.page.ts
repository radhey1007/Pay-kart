import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationPage } from '../registration/registration.page';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  angForm: FormGroup;
  validation_messages: any = {};
  constructor(public router: Router, public formBuilder: FormBuilder,public navCtrl:NavController) {
    this.createForm();
    this.setValidationMessages();
  }

  createForm = () => {

    this.angForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]))

    })
  }

  setValidationMessages = () => {

    this.validation_messages = {
      'email': [
        { type: 'required', message: 'Email is required.' },
        { type: 'pattern', message: 'Please enter a valid email.' }
      ],
      'password': [
        { type: 'required', message: 'Password is required.' },
        { type: 'minlength', message: 'Password must be at least 5 characters long.' },
        { type: 'maxlength', message: 'Password must be at less than or equal to 10 characters long.' }
      ],
    };
  }

  login = (form) => {
    //alert(form);
    console.table(form);
    this.goToDashboradPage();
  }

  ngOnInit() {


  }

  goToRegisterPage = () => {
    this.router.navigateByUrl('/registration');
  }

  goToDashboradPage = () => {
    this.router.navigateByUrl('/dashboard');
  }

  goToForgotPasswordPage = () => {
    this.router.navigateByUrl('/forgot');
  }

}
