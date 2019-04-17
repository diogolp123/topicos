import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { ColetasPage } from '../coletas/coletas';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'coletas',
        children: [
          {
            path: '',
            component: ColetasPage,
          }
        ]
      },
      {
        path: 'cadastro',
        children: [
          {
            path: '',
            loadChildren: '../cadastro/cadastro.module#CadastroModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/coletas',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

