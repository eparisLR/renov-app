import { Injectable } from '@angular/core';
import {ProjectsRestAPIService} from "../../../services/projects-rest.service";
import {Observable} from "rxjs";
import {Folder} from "../../sharing/models/folder.model";

@Injectable()
export class ProjectsService {

  constructor(private projectsAPI: ProjectsRestAPIService) {
  }

  public getProjects(): Observable<Folder[]> {
    return this.projectsAPI.get_projects()
  }
}
