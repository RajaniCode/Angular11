import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// import { HelloComponent } from './hello.component';

import { TopBarComponent } from './top-bar/top-bar.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

@NgModule({
  // imports:      [ BrowserModule, FormsModule ],

  imports:      [ BrowserModule, ReactiveFormsModule, RouterModule.forRoot([ { path: '', component: ProductListComponent }, ]) ],

  // declarations: [ AppComponent, HelloComponent, ProductListComponent ],

  declarations: [ AppComponent, TopBarComponent, ProductListComponent, ProductAlertsComponent ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
