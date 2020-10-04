import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';


import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import {FooterComponent} from "./footer/footer.component";
import {NgZorroAntdModule} from 'ng-zorro-antd';

registerLocaleData(en);

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    // LoadingComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgZorroAntdModule,
  ],
  providers: [],
})
export class LayoutModule { }
