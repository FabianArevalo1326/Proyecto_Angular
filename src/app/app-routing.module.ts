import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './components/shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/pages/client/client.module').then(m => m.ClientPageModule),
      },
      // {
      //   path: 'admin',
      //   loadChildren: () => import('./components/pages/admin/admin.module').then( m => m.AdminPageModule),
      // },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: false, useHash: true  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
