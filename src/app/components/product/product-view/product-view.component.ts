import { Component, OnInit } from '@angular/core';
import Product from '../../../models/Product';
import {ProductService} from '../../../service/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
products: Product[];
  constructor( private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe((data: Product[])=>{
      this.products= data;
    })
  }
  deleteProduct(id){

    this.ps.deleteProduct(id).subscribe(res =>{
      console.log('Product deleted');
    })
  }

}
