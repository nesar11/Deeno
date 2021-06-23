import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  angForm : FormGroup;
  product : any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ps : ProductService,
    private fb : FormBuilder
  ) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ],
      ProductPrice: ['', Validators.required ],
      StartDate: ['', Validators.required ],
      EndDate: ['', Validators.required ],
      Status: ['', Validators.required ],
    });
  }
    ngOnInit(): void {
      this.route.params.subscribe(params =>{
        this.ps.editProduct(params['id']).subscribe(res => {
          this.product = res;
          console.log(this.product);
      })
    })
  }


  updateProduct(ProductName, ProductDescription, ProductPrice,StartDate, EndDate, Status) {
    this.route.params.subscribe(params => {
      this.ps.updateProduct(ProductName, ProductDescription, ProductPrice, StartDate, EndDate, Status, params['id']);
      this.router.navigate(['products']);
    });
  }
}

