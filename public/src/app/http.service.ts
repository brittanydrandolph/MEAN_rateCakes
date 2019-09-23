import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConditionalExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes(){
    return this._http.get("/ratemycupcakes");
  }

  submitCupcake(newCake){
    return this._http.post("/ratemycupcakes", newCake);
  }

  addRating(newRating, cakeId){
    console.log("made it to service.ts")
    return this._http.post(`/ratings/${cakeId}`, newRating);
  }}
