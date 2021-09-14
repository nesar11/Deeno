import { Component,OnInit, QueryList, ViewChildren } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent  implements OnInit {

  @ViewChildren('drawer') sc: QueryList<MatSidenav>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    isLoggedIn : boolean = false;
  constructor(private breakpointObserver: BreakpointObserver,
    public auth: AuthService, private router: Router) {}

    ngOnInit(): void {
      if (window.location.pathname === '/auth/login' || window.location.pathname.includes('/auth/register')) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    }
    onSideNavToggle() {
      this.sc.first.toggle();
    }

    logout(): void {
      this.isLoggedIn = false;
      this.auth.logout();
      this.router.navigate(['/auth/login'], {queryParams: {loggedOut: 'success'}});

    }

}
