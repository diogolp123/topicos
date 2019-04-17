import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ColetasPage } from './coletas';
import { ColetasPageRoutingModule } from './coletas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColetasPageRoutingModule
  ],
  declarations: [
    ColetasPage
  ],
  entryComponents: [
    ColetasPage
  ]
})
export class ColetasModule { }
