import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../../services/projects.service";
import {MatTableDataSource} from "@angular/material/table";
import {Folder} from "../../../sharing/models/folder.model";

@Component({
    selector: 'app-projects-list',
    templateUrl: './folders-list.component.html',
    styleUrls: ['./projects-list.component.sass']
})
export class FoldersListComponent implements OnInit {
    listFolders: Folder[];
    displayedColumns: string[] = ['folder_num', 'edit', 'delete'];
    dataSource: MatTableDataSource<any>;
    filteredListFolders: Folder[];

    constructor(private projectsService: ProjectsService) {
    }

    ngOnInit(): void {
        this.projectsService.getProjects().subscribe((folders) => {
            this.listFolders = folders;
            this.filteredListFolders = folders;
        });

    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.filteredListFolders = this.listFolders;
        if (filterValue != "") {
            this.filteredListFolders = this.listFolders.filter((f) => f.folder_num.toLowerCase().includes(filterValue.trim().toLowerCase()));
        }
    }

}
