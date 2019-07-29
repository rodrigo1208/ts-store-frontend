import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DynamicFormModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ts-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '*',
        overflow: 'hidden'
      })),
      state('close', style({
        height: 0,
        overflow: 'hidden'
      })),
      transition('open <=> close', animate('300ms ease'))
    ])
  ]
})
export class FilterComponent implements OnInit {

  @Input() formModel: DynamicFormModel;
  @Input() showFilter = false;
  @Output() onFilter: EventEmitter<void>;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) {
    this.onFilter = new EventEmitter();
  }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  filter() {
    this.onFilter.emit(this.formGroup.value);
  }

  changeShowFilter = () => this.showFilter = !this.showFilter;
}
