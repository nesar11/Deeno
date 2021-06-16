import { Component, OnInit } from '@angular/core';
import Business from '../../../models/Business';
import { BusinessService } from '../../../service/business.service';

@Component({
  selector: 'app-gst-view',
  templateUrl: './gst-view.component.html',
  styleUrls: ['./gst-view.component.css']
})
export class GstViewComponent implements OnInit {
  businesses: Business[];

  constructor( private bs: BusinessService) { }

  ngOnInit(): void {
    this.bs
      .getBusinesses()
      .subscribe((data: Business[]) => {
        this.businesses = data;
        console.log(this.businesses);
    });
  }
  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
