import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ConfigService } from './config.service';
import { Project } from '../modules/sharing/models/project.model';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class ProjectsService {
    apiUrl: string;

    constructor(private http: HttpClient, 
                private config: ConfigService,
                private snackBar: MatSnackBar) { 
                    this.apiUrl = config.get_api_url()
    }

    public get_projects(): Observable<Project[]>{
        return this.http.get<Project[]>(this.apiUrl).pipe(
            map((projects) => {
                projects.map((project) => {
                    const instanciateProject: Project = new Project()
                    Object.assign(instanciateProject, project)
                    return instanciateProject
                })
            }),
            catchError((e: HttpErrorResponse) => {
                this.snackBar.open(e.message, "Ok")
                return throwError(() => e)
            })
        )
    }
}
