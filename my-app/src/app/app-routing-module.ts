import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { CatalogProduct } from './catalog-product/catalog-product';
import { ServiceCustomerHttp } from './service-customer-http/service-customer-http';


const routes: Routes = [
  {path: 'service-product-image-event', component: ServiceProductImageEvent},
  {path: 'service-product-image-event/:id', component: ServiceProductImageEventDetail},
  {path: 'catalog-product', component: CatalogProduct},
  {path: 'service-customer-http', component: ServiceCustomerHttp}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
