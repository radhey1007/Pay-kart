import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showToolbar = false;
  
  constructor(public router: Router,public navCtrl:NavController) {
  }

goToRegisterPage = () => {
  this.router.navigateByUrl('/registration');
}

goToLoginPage = () => {
  this.router.navigateByUrl('/login');
}
}
