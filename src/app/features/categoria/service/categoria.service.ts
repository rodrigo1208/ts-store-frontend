import {Injectable} from '@angular/core';
import {EntityActionOptions, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {Categoria} from './categoria';
import {Observable, of} from 'rxjs';
import {finalize, flatMap, map, tap} from 'rxjs/operators';

@Injectable()
export class CategoriaService extends EntityCollectionServiceBase<Categoria> {
  totalSize = 0;
  page = 0;

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Categoria', serviceElementsFactory);
  }
}
