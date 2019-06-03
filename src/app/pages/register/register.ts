import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SaveDataProvider } from '../../providers/save-data';
import { RegisterModel } from '../../interfaces/register-model';

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
    private  saveDataProvider: SaveDataProvider
  ) { }

  ngOnInit() {
  }

  async onRegister(form: NgForm) {
    if (form.valid) {
      this.saveDataProvider.saveLocalData(this.register);
      const alert = await this.alertCtrl.create({
        message: 'Usuário cadastrada com sucesso!',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              form.reset();
              this.router.navigateByUrl('/app/tabs/list');
            }
          }
        ]
      });
      await alert.present();
    }
  }
}
