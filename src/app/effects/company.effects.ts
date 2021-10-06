import { Inject, Injectable } from "@angular/core";
import { CompanyService } from "app/company/company.service";

import { Effect, Actions } from '@ngrx/effects';
import * as companyActions from "../actions/company.actions";

import { switchMap } from "rxjs/operators";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "app/models/app-state";
import { Company } from "app/company/company";

@Injectable()
export class CompanyEffects {

  constructor(
      private companyService: CompanyService,
      private actions$: Actions,
      private store: Store<AppState>
      ) {}

      @Effect()
      loadCompanies$ = this.actions$
      .ofType(companyActions.LOAD_COMPANIES).pipe(
        switchMap(() => this.companyService.loadCompanies()),
        map((companies: Company[]) => {
          return new companyActions.LoadCompaniesSuccessAction(companies)}
        )
      )

}
