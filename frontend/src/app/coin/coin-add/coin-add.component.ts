import { Component, OnInit } from '@angular/core';
import {CoinService} from '../../service/coin.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-coin-add',
  templateUrl: './coin-add.component.html',
  styleUrls: ['./coin-add.component.css']
})
export class CoinAddComponent implements OnInit {

  title = 'Add Coin';
  angForm : FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private coinService: CoinService,
              private fb: FormBuilder) {
                this.createForm();
              }
  createForm(){
    this.angForm=this.fb.group({
      name:['', Validators.required],
      price:['', Validators.required]
    })
  }

  addCoin(name, price){
    this.coinService.addCoin(name, price);
    this.router.navigate(['coins']);
  }
  ngOnInit(): void {
  }

}
