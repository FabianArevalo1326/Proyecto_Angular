import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {person} from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  public API: string;
  headers: HttpHeaders;
  TOKEN: any;
  router: Router;
  state: boolean;
  HEADER: HttpHeaders;

  person: person = {
    name: null,
    lastName: null,
    userName: null,
    direction: null,
    mobile: null,
    state: null,
    password: null,
    email: null,
    departmentName: null,
    cityName: null,
  };

  constructor(
      private httpClient: HttpClient,
  ) {
    this.header();
    this.API = environment.API;
    this.HEADER = new HttpHeaders({
      'Authorization': this.TOKEN,
      'X-XSS-Protection': '1;mode=block',
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
    });
  }

  // login(people: person){
  //
  //   return this.httpClient.post(this.API + 'login', people, {headers: this.headers});
  // }

  adminLogin(people: person){

    return this.httpClient.post(this.API + 'adminLogin', people, {headers: this.headers});
  }

  // personalInformationClient(user){
  //
  //   return this.httpClient.post(this.API + 'personalInformationClient', {'userName': user}, {headers: this.headers});
  // }

  personalInformationAdmin(user){

    return this.httpClient.post(this.API + 'personalInformationAdmin', {'userName': user}, {headers: this.headers});
  }

  token(){

    let token = JSON.parse(localStorage.getItem('token'));
    if(token){
      this.state = true;
      return token;
    }
  }

  header(){
    this.TOKEN = this.token();
    if(this.TOKEN){
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-XSS-Protection': '1;mode=block',
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Authorization': this.TOKEN
      });
    }else{

      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-XSS-Protection': '1;mode=block',
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
      });
    }
    return this.headers;
  }

  Header(token){
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-XSS-Protection': '1;mode=block',
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Authorization': token
    });
  }
}
