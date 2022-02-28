import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoldersListComponent} from "./components/folders-list/folders-list.component";
import {ConseillerHomeComponent} from "./components/conseiller-home/conseiller-home.component";
import { FoldersFormComponent } from './components/folders-form/folders-form.component';

const routes: Routes = [
    {path: "", component: ConseillerHomeComponent},
    {path: "folders", component: FoldersListComponent},
    {path: "folders/new", component: FoldersFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConseillersRoutingModule { }
