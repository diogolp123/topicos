import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { ColetasOptions } from '../../interfaces/coletas-options';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage implements OnInit {
  conferenceDate = '2047-05-17';
  valores: ColetasOptions[] = [];

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.valores = JSON.parse(window.localStorage.getItem('Coletas'));
  }

}
