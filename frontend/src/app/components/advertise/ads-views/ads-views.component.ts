import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AdunitService} from '../../../service/adunit.service';
import { AdUnit } from '../../../models/AdUnit';

@Component({
  selector: 'app-ads-views',
  templateUrl: './ads-views.component.html',
  styleUrls: ['./ads-views.component.css']
})
export class AdsViewsComponent implements OnInit {
  adunits: AdUnit[];


  constructor(private adunitservice: AdunitService,
              private http : HttpClient) { }

  ngOnInit() {
    this.adunitservice
      .getAdUnits()
      .subscribe((data: AdUnit[]) => {
      this.adunits = data;
    });
  }
  deleteAdUnit(id) {
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
