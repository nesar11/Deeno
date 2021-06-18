import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  result: any;

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
