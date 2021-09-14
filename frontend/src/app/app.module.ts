import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoinAddComponent } from './coin/coin-add/coin-add.component';
import { CoinViewsComponent } from './coin/coin-views/coin-views.component';
import { CoinUpdateComponent } from './coin/coin-update/coin-update.component';
import { AppRoutingModule} from './RouterConfig';
import { AdsAddComponent } from './components/advertise/ads-add/ads-add.component';
import { AdsUpdateComponent } from './components/advertise/ads-update/ads-update.component';
import { AdsViewsComponent } from './components/advertise/ads-views/ads-views.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductViewComponent } from './components/product/product-view/product-view.component';
import { GstAddComponent } from './components/gst/gst-add/gst-add.component';
import { GstEditComponent } from './components/gst/gst-edit/gst-edit.component';
import { GstViewComponent } from './components/gst/gst-view/gst-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { TokenInterceptorService} from './components/auth/token-interceptor.service';
import { FormsModule } from '@angular/forms';
import { PAddComponent } from './components/project/p-add/p-add.component';
import { PEditComponent } from './components/project/p-edit/p-edit.component';
import { PViewComponent } from './components/project/p-view/p-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthModule} from './components/auth/auth.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {SearchModule } from './coin/search/search.module';
@NgModule({
  declarations: [
    AppComponent,
    CoinAddComponent,
    CoinViewsComponent,
    CoinUpdateComponent,
    AdsAddComponent,
    AdsUpdateComponent,
    AdsViewsComponent,
    GstAddComponent,
    GstEditComponent,
    GstViewComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductViewComponent,
    SideNavComponent,
    PAddComponent,
    PEditComponent,
    PViewComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SlimLoadingBarModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    SearchModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
