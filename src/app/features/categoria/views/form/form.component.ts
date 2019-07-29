import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CategoriaService} from '../../service/categoria.service';
import {MergeStrategy} from '@ngrx/data';

@Component({
  selector: 'ts-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private service: CategoriaService,
              private dialogRef: MatDialogRef<FormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      id: [undefined, Validators.compose([])],
      descricao: [undefined, Validators.compose([])]
    });
  }

  ngOnInit() {
    if (this.data) {
      this.formGroup.patchValue({
        ...this.data
      });
    }
  }

  save = () =>
    !this.formGroup.value.id ?
      this.service.add(this.formGroup.value).subscribe(() => this.dialogRef.close()) :
      this.service.update(this.formGroup.value).subscribe(() => this.dialogRef.close());

  cancel = () => this.dialogRef.close();
}
