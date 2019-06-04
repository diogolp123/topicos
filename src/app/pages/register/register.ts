import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataProvider } from '../../providers/save-data';
import { RegisterModel } from '../../interfaces/register-model';
import { Badge } from '@ionic-native/badge/ngx';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  styleUrls: ['./register.scss'],
})
export class RegisterPage implements OnInit {
  register: RegisterModel = { login: '', password: '' };
  values: any[] = [];
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private  dataProvider: DataProvider,
    private badge: Badge
  ) { }

  ngOnInit() {
  }

  async onRegister(form: NgForm) {
    if (form.valid) {
      this.dataProvider.saveLocalData(this.register);
      const alert = await this.alertCtrl.create({
        message: 'Usuário cadastrada com sucesso!',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              form.reset();
              this.badge.increase(1);
              this.router.navigateByUrl('/app/tabs/list');
            }
          }
        ]
      });
      await alert.present();
    }
  }
}
