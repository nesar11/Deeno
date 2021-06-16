import { Component, OnInit } from '@angular/core';
import {CoinService}from '../../service/coin.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-coin-views',
  templateUrl: './coin-views.component.html',
  styleUrls: ['./coin-views.component.css']
})
export class CoinViewsComponent implements OnInit {
  coins : any;

  constructor(private http: HttpClient,
              private cs: CoinService,
              private route: ActivatedRoute,
              private router: Router,) { }

  ngOnInit(): void {
    this.getCoins();
  }
getCoins(){
    this.cs.getCoins().subscribe(res =>{
      this.coins = res;
      console.log(this.getCoins);
    });
  }

  deleteCoin(id) {
    this.cs.deleteCoin(id).subscribe(res => {
      this.router.navigate(['coins']);
      console.log('Deleted');
    });
}
}
