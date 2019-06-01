import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRouterModule} from "./app-router.module";
import {MatToolbarModule} from "@angular/material";
import {ListComponent} from "./components/list/list.component";
import {EditComponent} from "./components/edit/edit.component";
import {CreateComponent} from "./components/create/create.component";



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
