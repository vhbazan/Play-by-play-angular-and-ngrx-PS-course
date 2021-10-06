import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyService } from './company/company.service';
import './core/rxjs-extensions';
import { CompanyTableComponent } from './company/company-table/company-table.component';
import { CompanyStateService } from './company/company-state.service';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { StoreModule } from '@ngrx/store';
import { companyReducer } from './reducers/company.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './effects/company.effects';
// import 'rxjs/Rx';


@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyTableComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.forRoot({companies: companyReducer}),
    EffectsModule.forRoot([CompanyEffects])

  ],
  providers: [
    CompanyService,
    CompanyStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
