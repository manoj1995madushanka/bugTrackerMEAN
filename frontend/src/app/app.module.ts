import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRouterModule} from "./app-router.module";
import {
  MatButtonModule, MatCardModule, MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule, MatSnackBarModule, MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {ListComponent} from "./components/list/list.component";
import {EditComponent} from "./components/edit/edit.component";
import {CreateComponent} from "./components/create/create.component";
import {IssueService} from "./issue.service";
import {HttpClientModule} from "@angular/common/http";



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
    MatToolbarModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
