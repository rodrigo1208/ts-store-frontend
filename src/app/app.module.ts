import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {DefaultDataService, DefaultDataServiceConfig, EntityDataModule, HttpUrlGenerator} from '@ngrx/data';
import {entityConfig} from './features/entity-metadata';
import {HttpClientModule} from '@angular/common/http';
import {CustomUrlGenerator} from './core/providers/data-entity/custom-url-generator';
import {CustomDataService} from './core/providers/data-entity/custom-data-service';
import {AppMaterial} from './app.material';

const dataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:4567/api',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    DashboardModule,
    AppMaterial
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: DefaultDataServiceConfig, useValue: dataServiceConfig
    },
    {
      provide: HttpUrlGenerator, useClass: CustomUrlGenerator
    },
    {
      provide: DefaultDataService,
      useClass: CustomDataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas);
  }
}
