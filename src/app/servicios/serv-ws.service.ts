import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServWSService {

  constructor(private http:HttpClient) { }

Url = 'http://localhost'


getLoginData(){
  return this.http.get
}


}
