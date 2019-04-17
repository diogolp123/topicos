import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { ColetasOptions } from '../../interfaces/coletas-options';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
  styleUrls: ['./cadastro.scss'],
})
export class CadastroPage implements OnInit {
  conferenceDate = '2047-05-17';
  valores: ColetasOptions[] = [];

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.valores = JSON.parse(window.localStorage.getItem('Coletas'));
  }

}
