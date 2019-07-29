import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Categoria} from '../../service/categoria';
import {MatDialog} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {FormComponent} from '../form/form.component';
import {filter} from './filters';
import {CategoriaService} from '../../service/categoria.service';
import {PageableService} from '../../../../core/providers/pageable/pageable.service';
import {PageableComponent} from '../../../../core/providers/pageable/pageable.component';

@Component({
  selector: 'ts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent extends PageableComponent<Categoria> implements OnInit, OnDestroy {
  displayColumns = ['select', 'descricao'];
  selection = new SelectionModel(false, []);
  filter = filter;

  constructor(
    protected service: CategoriaService,
    protected pageable: PageableService,
    private dialog: MatDialog
  ) {
    super(pageable, service);
  }

  ngOnInit() {
    super.ngOnInit();
    this.service.getWithQuery({});
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  add() {
    this.dialog.open(FormComponent, {
      width: '300px'
    }).afterClosed()
      .subscribe(() => this.service.getWithQuery({}));
  }

  edit() {
    this.dialog.open(FormComponent, {
      width: '300px',
      data: this.selection.selected[0]
    }).afterClosed()
      .subscribe(() => this.service.getWithQuery({}));
  }

  onFilter(event: any) {
    this.service.clearCache();
    this.service.getWithQuery({
      ...event
    });
  }
}
