import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { RegisterPage } from '../register/register';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'register',
        children: [
          {
            path: '',
            component: RegisterPage,
          }
        ]
      },
      {
        path: 'list',
        children: [
          {
            path: '',
            loadChildren: '../list/list.module#ListModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/register',
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

