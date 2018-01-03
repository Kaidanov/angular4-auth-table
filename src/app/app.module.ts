import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { CallbackComponent } from './callback/callback.component';

import { AppComponent } from './app.component';
import { DataTableModule } from './data-table';

import { DataTableDemo1 } from './demo1/data-table-demo1';
import { DataTableDemo2 } from './demo2/data-table-demo2';
import { DataTableDemo3 } from './demo3/data-table-demo3';
import { DataTableDemo1Remote } from './demo1/data-table-demo1-remote';
import { AuthService } from './auth/auth.service';
import { MaterialModule } from '../material.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TableFilteringComponent } from '../table/table-filtering.component';

@NgModule({
  imports: [ BrowserModule,
    CommonModule,
    FormsModule,
    DataTableModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [ AppComponent, HomeComponent, CallbackComponent,
    TableFilteringComponent, DataTableDemo1, DataTableDemo2, DataTableDemo3, DataTableDemo1Remote ],
  bootstrap: [ AppComponent , HomeComponent ],
  providers: [AuthService]
})
export class AppModule { }
