import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  ErrorsModule,
  EventEffects,
  HttpModule,
  HttpEffects,
  LookupModule,
  RouterModule,
  RouterEffects,
  StorageModule,
  StorageEffects,
  StoreModule,
  apiBaseUrlSelector,
  authTokenSelector
} from '@caiu/library';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap } from '@ngrx/store';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReducersService } from './reducers.service';
import { SharedModule } from './shared/shared.module';
import { INITIAL_STATE } from './shared/seed';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<any>>(
  'Registered Reducers'
);

export function getReducers(reducersService: ReducersService) {
  return reducersService.getReducers();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    EffectsModule.forRoot([
      EventEffects,
      HttpEffects,
      RouterEffects,
      StorageEffects
    ]),
    ErrorsModule.forRoot(),
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    HttpModule.forRoot(apiBaseUrlSelector, authTokenSelector),
    LookupModule.forRootWithPath('Lookup'),
    RouterModule.forRoot(),
    SharedModule.forRoot(),
    StorageModule.forRoot('RVU_STORE'),
    StoreModule.forRoot(REDUCER_TOKEN, {
      initialState: INITIAL_STATE
    })
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      deps: [ReducersService],
      useFactory: getReducers
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
