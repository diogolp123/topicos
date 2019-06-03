import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { RegisterModel } from '../../interfaces/register-model';
import { SaveDataProvider } from '../../providers/save-data';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  styleUrls: ['./list.scss'],
})
export class ListPage implements OnInit {
  values: RegisterModel[] = [];

  constructor(private popoverCtrl: PopoverController, private saveDataProvider: SaveDataProvider) { }

  ionViewWillEnter() {
    this.saveDataProvider.recoverLocalData().then(data => {
      this.values = data;
    });
  }

  ngOnInit() {
  }

}
