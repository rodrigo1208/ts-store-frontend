import {OnDestroy, OnInit} from '@angular/core';
import {PageableService} from './pageable.service';
import {PageEvent} from '@angular/material';
import {EntityCollectionServiceBase} from '@ngrx/data';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

export class PageableComponent<T> implements OnInit, OnDestroy {
  collection$: Observable<T[]>;
  source$: Subject<T[]>;
  protected length = 0;
  protected pageSize = 10;
  protected index = 0;
  protected readonly unsubscriber$ = new Subject();

  constructor(protected pageable: PageableService, protected service: EntityCollectionServiceBase<T>) {
    this.collection$ = this.service.entities$;
    this.source$ = new Subject();
  }

  ngOnInit() {
    this.paginateSource();

    this.pageable.page
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe(res => this.length = res.totalSize);

  }

  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

  paginateSource() {
    this.collection$
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe(list => this.source$.next(list.slice(
        this.index * this.pageSize, this.index * this.pageSize + this.pageSize
      )));
  }

  page(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.index = event.pageIndex;
    this.service.getWithQuery({
      offset: this.index.toString(),
      size: this.pageSize.toString()
    })
  }
}
