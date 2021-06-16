import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdUnit } from '../../../models/AdUnit';
import { AdunitService } from '../../../service/adunit.service';
@Component({
  selector: 'app-ads-update',
  templateUrl: './ads-update.component.html',
  styleUrls: ['./ads-update.component.css']
})
export class AdsUpdateComponent implements OnInit {
  adunit : any= [];
  angForm : FormGroup;

  constructor(private route: ActivatedRoute,
              private router : Router,
              private adunitService : AdunitService,
              private fb : FormBuilder) {
                this.createFrom();
              }

  createFrom(){
    this.angForm = this.fb.group({
      unit_name : ['', Validators.required],
      unit_price : ['', Validators.required],
    });
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.adunitService.editAdUnit(params['id']).subscribe(res =>{
        this.adunit = res;
      })
    })
  }

  updateAdUnit(unit_name, unit_price) {
    this.route.params.subscribe(params => {
       this.adunitService.updateAdUnit(unit_name, unit_price, params['id']);
       this.router.navigate(['adsUnits']);
    });
 }

}
