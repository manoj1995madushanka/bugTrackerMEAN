import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {ListComponent} from "./components/list/list.component";
import {CreateComponent} from "./components/create/create.component";
import {EditComponent} from "./components/edit/edit.component";

const routes: Routes = [
  {path: 'list' , component: ListComponent},
  {path: 'create' , component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
