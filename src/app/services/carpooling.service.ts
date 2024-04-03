import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarpoolingService {

  constructor( private http:HttpClient) { }

  getAllRides(){
    return this.http.get('http://localhost:3000/rides');
  }
}
