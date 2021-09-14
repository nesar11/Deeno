import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CoinAddComponent } from './coin/coin-add/coin-add.component';
import { CoinViewsComponent } from './coin/coin-views/coin-views.component';
import { CoinUpdateComponent } from './coin/coin-update/coin-update.component';
import { AdsAddComponent } from './components/advertise/ads-add/ads-add.component';
import { AdsUpdateComponent } from './components/advertise/ads-update/ads-update.component';
import { AdsViewsComponent } from './components/advertise/ads-views/ads-views.component';
import { GstAddComponent } from './components/gst/gst-add/gst-add.component';
import { GstEditComponent } from './components/gst/gst-edit/gst-edit.component';
import { GstViewComponent } from './components/gst/gst-view/gst-view.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductViewComponent } from './components/product/product-view/product-view.component';
import { PAddComponent } from './components/project/p-add/p-add.component';
import { PEditComponent } from './components/project/p-edit/p-edit.component';
import { PViewComponent } from './components/project/p-view/p-view.component';
import { AuthGuard } from './components/auth/auth.guard';
export const routes: Routes = [
  // { path: '**', redirectTo: '' },
  {path: 'add', component: CoinAddComponent, canActivate: [AuthGuard]},
  {path: 'coins', component: CoinViewsComponent, canActivate: [AuthGuard] },
  {path: 'edit/:id', component: CoinUpdateComponent, canActivate: [AuthGuard]},
  {path: 'create', component: AdsAddComponent, canActivate: [AuthGuard]},
  {path: 'adsUnits', component: AdsViewsComponent, canActivate: [AuthGuard]},
  {path: 'adsEdit/:id', component: AdsUpdateComponent, canActivate: [AuthGuard]},
  {path: 'gstAdd', component: GstAddComponent, canActivate: [AuthGuard]},
  {path: 'business', component: GstViewComponent, canActivate: [AuthGuard]},
  {path: 'business/:id', component: GstEditComponent, canActivate: [AuthGuard]},
  {path: 'productAdd', component: ProductAddComponent, canActivate: [AuthGuard]},
  {path: 'products', component: ProductViewComponent, canActivate: [AuthGuard]},
  {path: 'product/:id', component: ProductEditComponent, canActivate: [AuthGuard]},
  {path: 'projectAdd', component: PAddComponent, canActivate: [AuthGuard]},
  {path: 'projects', component: PViewComponent, canActivate: [AuthGuard]},
  {path: 'project/:id', component: PEditComponent, canActivate: [AuthGuard]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
