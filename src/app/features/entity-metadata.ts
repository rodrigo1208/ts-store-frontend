import {EntityDataModuleConfig, EntityMetadataMap} from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Categoria: {
    additionalCollectionState: {
      page: 0,
      size: 0
    }
  }
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
};
