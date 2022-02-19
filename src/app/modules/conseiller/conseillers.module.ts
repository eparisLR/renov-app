import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoldersListComponent } from './components/projects-list/folders-list.component';
import { ConseillersRoutingModule } from './conseillers-routing.module';
import { ProjectsService } from './services/projects.service';
import {ConseillerHomeComponent} from "./components/conseiller-home/conseiller-home.component";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {ConseillerLayoutComponent} from "./components/conseiller-layout/conseiller-layout.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [FoldersListComponent, ConseillerHomeComponent, ConseillerLayoutComponent],
    imports: [
        CommonModule,
        ConseillersRoutingModule,
        MatTableModule,
        MatInputModule,
        MatPaginatorModule,
        MatIconModule,
        MatButtonModule
    ],
  providers: [
    ProjectsService
  ]
})
export class ConseillersModule { }
