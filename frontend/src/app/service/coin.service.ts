import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import Coin from '../models/Coin';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  result: any;
  searchresult: any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  uri = 'http://localhost:4001/coins'
  handleError: any;
  constructor( private http: HttpClient) { }
  addCoin(name, price) {
    const uri = 'http://localhost:4001/coins/add';
    const obj = {
      name: name,
      price: price
    };
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }

  getCoins() {
    const uri = 'http://localhost:4001/coins';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
      });
  }




  editCoin(id) {
    const uri = 'http://localhost:4001/coins/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
  updateCoin(name, price, id) {
    const uri = 'http://localhost:4001/coins/update/' + id;

    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteCoin(id) {
    const uri = 'http://localhost:4001/coins/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }




}

