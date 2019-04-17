import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColetasPage } from './coletas';

const routes: Routes = [
  {
    path: '',
    component: ColetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColetasPageRoutingModule { }
