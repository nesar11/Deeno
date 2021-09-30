import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../service/coin.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Subject, throwError } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
  retryWhen,
  retry,
} from 'rxjs/operators';
import * as XLSX from 'xlsx';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-coin-views',
  templateUrl: './coin-views.component.html',
  styleUrls: ['./coin-views.component.css'],
})
export class CoinViewsComponent implements OnInit {
  coins: any;
  fileName = 'ExcelSheet.xlsx';
  constructor(
    private http: HttpClient,
    private cs: CoinService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  public searchService: SearchService;
  public loading: boolean;
  public searchTerm = new Subject<string>();
  public searchResults: any;
  public paginationElements: any;
  public errorMessage: any;
  public searchForm = new FormGroup({
    search: new FormControl('', Validators.required),
  });

  coinSearch: string = '';
  coinQuery = {
    name: ''
  }

  ngOnInit(): void {
    // this.getCoins();
    this.initCoins();
  }

  async initCoins() {
    await this.getCoin(this.coinQuery.name).then(data => {
      this.coins = data;
    }).catch(err => {
      // error code
    });
  }
  // getCoins() {
  //   this.cs.getCoins(this.coinQuery.name).subscribe((res) => {
  //     this.coins = res;
  //     console.log(res);
  //   });
  // }

  // deleteCoin(id) {
  //   this.cs.deleteCoin(id).subscribe((res) => {
  //     this.router.navigate(['coins']);
  //     console.log('Deleted');
  //   });
  // }

  async onDeleteCoin(id) {
    await this.deleteCoin(id).then(response => {
      // success message
    }).catch(err => {
      // error message
    });
  }

  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  // Utility functions
  onKeyup(e: any) {
    if (this.coinSearch !== '') {
      this.coinQuery.name = `/search?name=${this.coinSearch}`;
      this.initCoins();
    } else {
      this.coinQuery.name = '';
      this.initCoins();
    }

  }

  // API functions
  getCoin(query?): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cs.getCoins(query)
        .subscribe(response => {
          if (response) {
            resolve(response);
          }
        }, err => {
          if (err) {
            reject(reject);
          }
        });
    });
  }

  deleteCoin(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cs.deleteCoin(id)
        .subscribe(response => {
          if (response) {
            resolve(response);
          }
        }, err => {
          if (err) {
            reject(err);
          }
        });
    });
  }
}
