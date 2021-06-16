import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {AdunitService} from '../../../service/adunit.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ads-add',
  templateUrl: './ads-add.component.html',
  styleUrls: ['./ads-add.component.css']
})
export class AdsAddComponent implements OnInit {

angForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adunitservice: AdunitService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({
      unit_name: ['', Validators.required ],
      unit_price: ['', Validators.required ]
   });
  }
  addAdUnit(unit_name, unit_price) {
    this.adunitservice.addAdUnit(unit_name, unit_price);
    this.router.navigate(['adsUnits']);
}
  ngOnInit(): void {
  }

}
