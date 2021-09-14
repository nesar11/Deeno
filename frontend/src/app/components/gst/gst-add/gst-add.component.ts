import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {BusinessService} from '../../../service/business.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private bs: BusinessService) {
              this.createForm();
  }
  createForm(){
    this.angForm = this.fb.group({
      person_name: ['', Validators.required ],
      business_name: ['', Validators.required ],
      business_gst_number: ['', Validators.required ]
    });
  }
  ngOnInit(): void {
  }
  addBusiness(person_name, busines_name, business_gst_number) {
    this.bs.addBusiness(person_name, busines_name, business_gst_number);
    this.router.navigate(['business']);
  }

}
