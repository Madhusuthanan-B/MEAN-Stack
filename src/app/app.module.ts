import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NavBarModule } from './navbar/navbar.module';
import { HomeModule } from './home/index';
import { AboutModule } from './about/index';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavBarModule,
    HomeModule,
    AboutModule,
    routing
  ],
  providers: [appRoutingProviders, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
