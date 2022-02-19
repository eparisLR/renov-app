import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ConfigService } from './config.service';
import { Folder } from '../modules/sharing/models/folder.model';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class ProjectsRestAPIService {
    apiUrl: string;

    constructor(private http: HttpClient,
                private config: ConfigService,
                private snackBar: MatSnackBar) {
                    this.apiUrl = config.get_api_url()
    }

    public get_projects(): Observable<Folder[]>{
        return this.http.get<Folder[]>(this.apiUrl + "/api/v1/folders/").pipe(
            map((projects) => {
                return projects.map((project) => {
                    const instanciateProject: Folder = new Folder()
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
