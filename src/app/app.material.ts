import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule, MatSnackBarModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class AppMaterial { }
