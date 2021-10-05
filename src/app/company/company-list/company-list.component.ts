import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs/Observable';
import { CompanyStateService } from '../company-state.service';
import { Store } from '@ngrx/store';
import { AppState } from 'app/models/app-state';
import * as companyActions from "../../actions/company.actions";

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies$: Observable<Company[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.companies$ = this.store.select(state => state.companies);
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.store.dispatch(new companyActions.LoadCompaniesAction())
    // this.companyService.loadCompanies();
    // this.store.dispatch(new companyActions.LoadCompaniesAction());
    // this.companies$ = this.companyStateService.companies$;
  }

  deleteCompany(companyId: number): void {
    // this.companyService.deleteCompany(companyId)
    //   .subscribe(() => this.getCompanies());
    // this.store.dispatch(new companyActions.DeleteCompanyAction(companyId));
  }

}
