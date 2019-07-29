import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './views/list/list.component';
import {FormComponent} from './views/form/form.component';
import {CategoriaRoutingModule} from './categoria-routing.module';
import {AppMaterial} from '../../app.material';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FilterModule} from '../../core/components/filter/filter.module';
import {CategoriaService} from './service/categoria.service';
import {EntityDataService} from '@ngrx/data';
import {Categoria} from './service/categoria';
import {PageableService} from '../../core/providers/pageable/pageable.service';
import {CustomDataService, ENTITY_NAME_PROVIDER} from '../../core/providers/data-entity/custom-data-service';

@NgModule({
  declarations: [ListComponent, FormComponent],
  entryComponents: [FormComponent],
  imports: [
    CommonModule,
    AppMaterial,
    FontAwesomeModule,
    ReactiveFormsModule,
    CategoriaRoutingModule,
    FilterModule,
  ],
  providers: [
    CategoriaService,
    CustomDataService,
    PageableService,
    {
      provide: ENTITY_NAME_PROVIDER,
      useValue: 'Categoria'
    }
  ]
})
export class CategoriaModule {
  constructor(entityDataService: EntityDataService,
              customDataService: CustomDataService<Categoria>) {
    entityDataService.registerService('Categoria', customDataService);
  }

}
