import { Injectable } from '@angular/core';
import {AuthServices} from './auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  settings: any;
  social_networks: any;

  constructor(
      private authService: AuthServices,
      private httpClient: HttpClient
  ) { }

  data(){
    return this.httpClient.get(this.authService.API + 'setting', {headers: this.authService.headers});
  }

  save(name: any, value: any){
    return this.httpClient.put(this.authService.API + 'setting/update', {'name': name, 'value': value}, {headers: this.authService.headers});
  }

}
