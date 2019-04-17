import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { CadastroModule } from '../cadastro/cadastro.module';
import { ColetasModule } from '../coletas/coletas.module';

@NgModule({
  imports: [
    CadastroModule,
    CommonModule,
    IonicModule,
    ColetasModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
