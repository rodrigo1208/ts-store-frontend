import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import {DynamicFormsCoreModule} from '@ng-dynamic-forms/core';
import {DynamicFormsMaterialUIModule} from '@ng-dynamic-forms/ui-material';
import {AppMaterial} from '../../../app.material';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [FilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppMaterial,
    DynamicFormsCoreModule,
    DynamicFormsMaterialUIModule,
    FontAwesomeModule
  ],
  exports: [FilterComponent]
})
export class FilterModule { }
