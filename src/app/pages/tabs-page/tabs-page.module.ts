import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { ListModule } from '../list/list.module';
import { RegisterModule } from '../register/register.module';

@NgModule({
  imports: [
    ListModule,
    CommonModule,
    IonicModule,
    RegisterModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
