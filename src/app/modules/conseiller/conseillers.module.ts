import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoldersListComponent } from './components/folders-list/folders-list.component';
import { ConseillersRoutingModule } from './conseillers-routing.module';
import { FoldersService } from './services/folders.service';
import {ConseillerHomeComponent} from "./components/conseiller-home/conseiller-home.component";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {ConseillerLayoutComponent} from "./components/conseiller-layout/conseiller-layout.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { MatCardModule} from "@angular/material/card"
import { FoldersFormComponent } from './components/folders-form/folders-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    FoldersListComponent,
    FoldersFormComponent,
    ConseillerHomeComponent,
    ConseillerLayoutComponent],
    imports: [
        CommonModule,
        ConseillersRoutingModule,
        MatTableModule,
        MatInputModule,
        MatPaginatorModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        FlexModule,
        ReactiveFormsModule
    ],
  providers: [
    FoldersService,
    FormBuilder
  ]
})
export class ConseillersModule { }
