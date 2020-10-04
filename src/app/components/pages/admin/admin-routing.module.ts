import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminPermissionsGuard} from '../../../guard/admin-permissions.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminPermissionsGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
