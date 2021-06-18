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
  {path: 'add', component: CoinAddComponent, canActivate: [AuthGuard]},
  {path: 'coins', component: CoinViewsComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: CoinUpdateComponent, canActivate: [AuthGuard]},
  {path: 'create', component: AdsAddComponent},
  {path: 'adsUnits', component: AdsViewsComponent},
  {path: 'adsEdit/:id', component: AdsUpdateComponent},
  {path: 'gstAdd', component: GstAddComponent},
  {path: 'business', component: GstViewComponent},
  {path: 'business/:id', component: GstEditComponent},
  {path: 'productAdd', component: ProductAddComponent},
  {path: 'products', component: ProductViewComponent},
  {path: 'product/:id', component: ProductEditComponent},
  {path: 'projectAdd', component: PAddComponent},
  {path: 'projects', component: PViewComponent},
  {path: 'project/:id', component: PEditComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
