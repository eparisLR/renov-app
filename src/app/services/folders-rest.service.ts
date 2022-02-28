import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ConfigService } from './config.service';
import { Folder } from '../modules/sharing/models/folder.model';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class FoldersRestAPIService {
    apiUrl: string;

    constructor(private http: HttpClient,
                private config: ConfigService,
                private snackBar: MatSnackBar) {
                    this.apiUrl = config.get_api_url()
    }

    public get_projects(): Observable<Folder[]>{
        return this.http.get<Folder[]>(this.apiUrl + "/api/v1/folders/").pipe(
            map((folders) => {
                return folders.map((folder) => {
                    const instanciateProject: Folder = new Folder()
                    Object.assign(instanciateProject, folder)
                    return instanciateProject
                })
            }),
            catchError((e: HttpErrorResponse) => {
                this.snackBar.open(e.message, "Ok")
                return throwError(() => e)
            })
        )
    }

    public createFolder(folder: Folder): Observable<Folder> {
        console.log("je suis là")
        return this.http.post<Folder>(this.apiUrl + "/api/v1/folders/", folder).pipe(
            map((folder) => {
                const instanciateProject: Folder = new Folder()
                Object.assign(instanciateProject, folder)

                this.snackBar.open("La création du dossier a fonctionné", "Ok")
                return instanciateProject
            }),
            catchError((e: HttpErrorResponse) => {
                this.snackBar.open(e.message, "Ok")
                return throwError(() => e)
            })
        )
    }
}
