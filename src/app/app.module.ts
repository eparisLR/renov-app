import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {ConseillersModule} from "./modules/conseiller/conseillers.module";
import {ProjectsRestAPIService} from "./services/projects-rest.service";
import {ConfigService} from "./services/config.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Overlay} from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ConseillersModule,
    HttpClientModule
  ],
  providers: [ProjectsRestAPIService,
  ConfigService,
  MatSnackBar,
  Overlay],
  bootstrap: [AppComponent]
})
export class AppModule { }
