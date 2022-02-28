import { Injectable } from '@angular/core';
import {FoldersRestAPIService} from "../../../services/folders-rest.service";
import {Observable} from "rxjs";
import {Folder} from "../../sharing/models/folder.model";

@Injectable()
export class FoldersService {

  constructor(private foldersAPI: FoldersRestAPIService) {
  }

  public getFolders(): Observable<Folder[]> {
    return this.foldersAPI.get_projects()
  }

  public createFolder(folder: Folder): Observable<Folder>{
    return this.foldersAPI.createFolder(folder)
  }
}
