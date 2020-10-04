import { Injectable } from '@angular/core';
import {AuthServices} from './auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
      private authService: AuthServices,
      private httpClient: HttpClient
  ) { }

  restoreProduct(code: any){
    return this.httpClient.put(this.authService.API + 'restore/product', {'code': code} ,{headers: this.authService.headers});
  }

  deleteProduct(code: any){
    return this.httpClient.put(this.authService.API + 'delete/product', {'code': code} ,{headers: this.authService.headers});
  }

  queryProduct(code: any) {

    return this.httpClient.post(this.authService.API + 'query/product', {'code': code}, {headers: this.authService.headers});
  }

  changeProduct(service: any) {

    return this.httpClient.put(this.authService.API + 'update/product', service, {headers: this.authService.headers});
  }

  save_product(name: any){
    return this.httpClient.post(this.authService.API + 'add/product', name, {headers: this.authService.headers});
  }

  product(){
    return this.httpClient.get(this.authService.API + 'product/all', {headers: this.authService.headers});
  }
}
