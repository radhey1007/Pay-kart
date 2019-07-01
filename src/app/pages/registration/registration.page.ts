import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  registrationForm:FormGroup;
  validation_messages:any={};

 genders = [
     'Male' ,
     'Female',
     'Others' ,
  ];
  constructor(public router:Router,public formBuilder:FormBuilder,public modalCtrl: ModalController) {

    this.createForm();
    this.setValidationMessages();
   }

   createForm =() => {

    this.registrationForm = this.formBuilder.group({
      name:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),     
      gender:new FormControl('',Validators.required),   
      dob:new FormControl('',Validators.required),     
      mobile: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]))
    });

   }

  ngOnInit() {

  }


  
  setValidationMessages = ()=> {
    this.validation_messages = {
      'name':[
        { type: 'required', message: 'Full Name is required.' },
        { type: 'pattern', message: 'Please enter a valid full name.' }
      ],
      'email': [
        { type: 'required', message: 'Email is required.' },
        { type: 'pattern', message: 'Please enter a valid email.' }
      ],
      'gender': [
        { type: 'required', message: 'Please select your gender.' }
      ],
      'dob': [
        { type: 'required', message: 'Please select your D.O.B.' }
      ],
      'mobile': [
        { type: 'required', message: 'Mobile is required.' },
        { type: 'minlength', message: 'Mobile num must be 10 digit.' },
        { type: 'maxlength', message: 'Mobile num must be 10 digit.' }
      ],
      'password': [
        { type: 'required', message: 'Password is required.' },
        { type: 'minlength', message: 'Password must be at least 5 characters long.' },
        { type: 'maxlength', message: 'Password must be at less than or equal to 10 characters long.' }
      ]  
    }
  }

  register = (form) => {
    alert('test')
    console.table(form)
  }

  goToLoginPage = ()=> {
    this.router.navigateByUrl('login');
  }

}
