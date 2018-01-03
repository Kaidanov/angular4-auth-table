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
import { AuthService } from './auth/auth.service';
import { MaterialModule } from '../material.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TableFilteringComponent } from './table/table-filtering.component';

@NgModule({
  imports: [ BrowserModule,
    CommonModule,
    FormsModule,
   RouterModule.forRoot(ROUTES),
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [ AppComponent, HomeComponent, CallbackComponent,
    TableFilteringComponent ],
  bootstrap: [ AppComponent , HomeComponent ],
  providers: [AuthService]
})
export class AppModule { }
