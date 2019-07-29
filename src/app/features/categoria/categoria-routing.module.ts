import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './views/list/list.component';
import {FormComponent} from './views/form/form.component';

@Component({
  template: '<router-outlet></router-outlet>'
})
export class EmptyComponent {}

const routes: Routes = [
  {
    path: '',
    component: EmptyComponent,
    data: {
      breadcrumb: 'Categorias'
    },
    children: [
      {
        path: '',
        component: ListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [EmptyComponent],
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
