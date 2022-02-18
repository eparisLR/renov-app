import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectsModule } from './modules/projects/projects.module';

const routes: Routes = [
  {path : "", component: AppComponent},
  {path : "projects", loadChildren: () => ProjectsModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
