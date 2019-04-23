import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { ColetasOptions } from '../../interfaces/coletas-options';

@Component({
  selector: 'page-coletas',
  templateUrl: 'coletas.html',
  styleUrls: ['./coletas.scss'],
})
export class ColetasPage implements OnInit {
  coletas: ColetasOptions = { volume: '', temperatura: '' };
  valorTemp: any[] = [];
  constructor(
    private http: HttpClient,
    public router: Router,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('Coletas') == null) {
      window.localStorage.setItem('Coletas', JSON.stringify(this.valorTemp));
    }
  }

  async onRegister(form: NgForm) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'});

    const options = { headers: headers };

    if (form.valid) {

      const tester: String = window.localStorage.getItem('Coletas');
      if (tester !== 'undefined') {
        this.valorTemp = JSON.parse(window.localStorage.getItem('Coletas'));
      }

      this.valorTemp.push(this.coletas);
      window.localStorage.removeItem('Coletas');
      window.localStorage.setItem('Coletas', JSON.stringify(this.valorTemp));

      const alert = await this.alertCtrl.create({
        message: 'Coleta cadastrada com sucesso!',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.router.navigateByUrl('/app/tabs/cadastro');
            }
          }
        ]
      });
      await alert.present();


    }
  }
}
