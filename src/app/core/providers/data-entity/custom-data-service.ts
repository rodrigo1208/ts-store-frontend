import {DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator, QueryParams} from '@ngrx/data';
import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PageableService} from '../pageable/pageable.service';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import {Update} from '@ngrx/entity';

export const ENTITY_NAME_PROVIDER = 'ENTITY_NAME';

@Injectable()
export class CustomDataService<T> extends DefaultDataService<T> {
  constructor(@Inject(ENTITY_NAME_PROVIDER) entityName: string,
              protected http: HttpClient,
              protected httpUrlGenerator: HttpUrlGenerator,
              protected dataServiceConfig: DefaultDataServiceConfig,
              private snack: MatSnackBar,
              @Optional() private pageable: PageableService) {
    super(entityName, http, httpUrlGenerator, dataServiceConfig);
  }

  add(entity: T): Observable<T> {
    return super.add(entity).pipe<T>(<any>this.defaultSaveCatch());
  }

  update(entity: Update<T>): Observable<T> {
    return super.update(entity).pipe<T>(<any>this.defaultSaveCatch());
  }

  delete(key: number | string): Observable<number | string> {
    return super.delete(key).pipe(<any>this.defaultSaveCatch())
  }

  getById(key: number | string): Observable<T> {
    return super.getById(key).pipe(<any>this.defaultListCatch())
  }

  getAll(): Observable<T[]> {
    return super.getAll().pipe(this.defaultListCatch(), this.defaultMap());
  }

  getWithQuery(queryParams: QueryParams | string): Observable<T[]> {
    return super.getWithQuery(queryParams).pipe(this.defaultListCatch(), this.defaultMap());
  }

  private defaultMap = () => map((value: any) => {
    if (this.pageable) {
      this.pageable.next({page: value.page, totalSize: value.totalElements});
    }
    return value.entities;
  });

  private defaultSaveCatch() {
    return catchError(({ error }) => {
      this.snack.open('Não foi possível salvar, tente novamente', null, {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        duration: 5000
      });
      return throwError(error);
    });
  }

  private defaultListCatch() {
    return catchError(({ error }) => {
      this.snack.open('Não foi possível fazer a busca, tente novamente', null, {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        duration: 5000
      });
      return throwError(error);
    });
  }
}
