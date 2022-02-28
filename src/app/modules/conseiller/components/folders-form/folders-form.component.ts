import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Folder } from 'src/app/modules/sharing/models/folder.model';
import { FoldersService } from '../../services/folders.service';

@Component({
  selector: 'app-folders-form',
  templateUrl: './folders-form.component.html',
  styleUrls: ['./folders-form.component.sass']
})
export class FoldersFormComponent implements OnInit {
  folderForm: FormGroup;

  constructor(private fb: FormBuilder,
              private foldersService: FoldersService) { }

  ngOnInit(): void {
    this.folderForm = this.fb.group(
      {firstname : ["",[ Validators.required, Validators.minLength(1)]],
      lastname : ["", [Validators.required, Validators.minLength(1)]],
      email : ["", [Validators.required, Validators.email]],
      address : ["", [Validators.required, Validators.minLength(1)]],
      revenu : ["",[ Validators.required]],
      phone : ["", [Validators.required, Validators.maxLength(10)]],
      situation : ["", [Validators.required]],
      budget : ["", [Validators.required]],
      numFolder : ["", [Validators.required]]}
    )
  }

  saveFolder() {
    const folderToCreate = new Folder();

    console.log(this.folderForm)

    folderToCreate.situation = this.folderForm.get("situation")?.value;
    folderToCreate.tax_income = this.folderForm.get("revenu")?.value;
    folderToCreate.folder_num = this.folderForm.get("numFolder")?.value;
    folderToCreate.id_customer = 1
    folderToCreate.id_housing = 1

    this.foldersService.createFolder(folderToCreate).subscribe((data) => console.log(data))
  }

}
