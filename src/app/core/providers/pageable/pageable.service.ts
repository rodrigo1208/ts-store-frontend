import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class PageableService {
  page: Subject<Page>;
  constructor() {
    this.page = new BehaviorSubject(INITIAL);
  }
  clear = () => this.page.next(INITIAL);
  next = (value: Page) => this.page.next(value);
}

export interface Page {
  page: number;
  totalSize: number;
}

const INITIAL = { page: 0, totalSize: 0 };
