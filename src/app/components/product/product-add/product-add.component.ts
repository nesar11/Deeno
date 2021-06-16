import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
angForm : FormGroup;
model :'Product Add';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private ps:ProductService) {
    this.createForm();
   }

   createForm(){
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ],
      ProductPrice: ['', Validators.required ],
      StartDate: ['', Validators.required ],
      EndDate: ['', Validators.required ],
      Status: ['', Validators.required ],
    });

   }
   addProduct(ProductName, ProductDescription, ProductPrice, StartDate, EndDate, Status) {
    this.ps.addProduct(ProductName, ProductDescription, ProductPrice, StartDate, EndDate, Status);
    this.router.navigate(['products'])
  }
  ngOnInit(): void {
  }

}
