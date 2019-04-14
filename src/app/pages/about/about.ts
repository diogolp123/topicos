import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';
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

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
}
