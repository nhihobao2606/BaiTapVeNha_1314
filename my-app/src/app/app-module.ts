import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { CatalogProduct } from './catalog-product/catalog-product';
import { Homework } from './homework/homework';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ServiceCustomerHttp } from './service-customer-http/service-customer-http';

@NgModule({
  declarations: [
    App,
    Homework,
    ServiceProductImageEvent,
    ServiceProductImageEventDetail,
    CatalogProduct,
    ServiceCustomerHttp
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(withInterceptorsFromDi())
  ],

  bootstrap: [App],
})
export class AppModule {}
