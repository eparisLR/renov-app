import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConseillersModule} from "./modules/conseiller/conseillers.module";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {path : "", component: AppComponent},
  {path : "conseillers", loadChildren: () => ConseillersModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
