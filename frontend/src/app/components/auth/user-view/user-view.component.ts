import { Component, OnInit } from '@angular/core';
import { User} from '../../../models/User';
import {AuthService} from '../auth.service';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  users: User[];
  // fileName= 'ExcelSheet.xlsx';
  constructor( private as: AuthService, private http : HttpClient) { }

  ngOnInit(): void {
    this.as.getUser().subscribe((data: User[]) => {
      this.users = data;
      console.log(data)
    })
  }

  // exportexcel(): void
  // {
  //   /* pass here the table id */
  //   let element = document.getElementById('excel-table');
  //   const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

  //   /* generate workbook and add the worksheet */
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  //   /* save to file */
  //   XLSX.writeFile(wb, this.fileName);

  // }

}
