import {DynamicInputModel, DynamicSliderModel, DynamicSwitchModel} from '@ng-dynamic-forms/core';

export const filter = [
  new DynamicInputModel(
    {
      id: 'descricao',
      label: 'Descricao',
    },
    {
      element: {
        host: 'col-md-6'
      }
    }
  ),
  new DynamicSwitchModel(
    {
      id: 'active',
      offLabel: 'Inativo',
      onLabel: 'Ativo',
      labelPosition: 'after',
      value: true
    },
    {
      element: {
        host: 'col-md-6'
      }
    }
  )
];
