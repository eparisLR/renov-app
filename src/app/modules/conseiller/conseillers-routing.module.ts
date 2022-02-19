import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoldersListComponent} from "./components/projects-list/folders-list.component";
import {ConseillerHomeComponent} from "./components/conseiller-home/conseiller-home.component";

const routes: Routes = [
    {path: "", component: ConseillerHomeComponent},
    {path: "folders", component: FoldersListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConseillersRoutingModule { }
