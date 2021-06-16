import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CoinService} from'../../service/coin.service';
@Component({
  selector: 'app-coin-update',
  templateUrl: './coin-update.component.html',
  styleUrls: ['./coin-update.component.css']
})
export class CoinUpdateComponent implements OnInit {
  title: 'Coin bit';
 coin : any;
 angForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private service: CoinService, private fb: FormBuilder) {
    this.createForm();
   }


  createForm(){
    this.angForm=this.fb.group({
      name:['', Validators.required],
      price:['', Validators.required]
    })
  }
  updateCoin(name, price) {
    this.route.params.subscribe(params => {
    this.service.updateCoin(name, price, params['id']);
    this.router.navigate(['coins']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.coin = this.service.editCoin(params['id']).subscribe(res => {
        this.coin = res;
        console.log(this.coin);
      });
    });
  }
}
