import {DefaultHttpUrlGenerator, HttpResourceUrls, normalizeRoot, Pluralizer} from '@ngrx/data';

export class CustomUrlGenerator extends DefaultHttpUrlGenerator{
  constructor(protected customPluralizer: Pluralizer) {
    super(customPluralizer);
  }

  protected getResourceUrls(entityName: string, root: string): HttpResourceUrls {
    let resourceUrls = this.knownHttpResourceUrls[entityName];
    if (!resourceUrls) {
      const nRoot = normalizeRoot(root);
      resourceUrls = {
        entityResourceUrl: `${nRoot}/${entityName}/`.toLowerCase(),
        collectionResourceUrl: `${nRoot}/${this.customPluralizer.pluralize(entityName)}`.toLowerCase(),
      };
      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    }
    return resourceUrls;
  }
}
