import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri = 'http://localhost:4001/products';
  constructor( private http: HttpClient) { }
  addProduct(ProductName, ProductDescription, ProductPrice, StartDate, EndDate, Status) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice,
      StartDate,
      EndDate,
      Status
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getProducts(){
    return this.http.get(`${this.uri}`);
  }
  editProduct(id){
    return this.http.get(`${this.uri}/edit/${id}`);
  }
    updateProduct(ProductName, ProductDescription, ProductPrice, StartDate, EndDate, Status, id) {
      const obj = {
        ProductName,
        ProductDescription,
        ProductPrice,
        StartDate,
        EndDate,
        Status
      };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
  }
  deleteProduct(id){
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
