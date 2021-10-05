import { Company } from "app/company/company";

export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';

export class LoadCompaniesAction {
  readonly type = LOAD_COMPANIES;

  constructor() {
    // empty
  }
}

export class LoadCompaniesSuccessAction {
  readonly type = LOAD_COMPANIES_SUCCESS;

  constructor(public payload: Company[]) {
    // empty
  }
}

export type Action =
  LoadCompaniesAction | LoadCompaniesSuccessAction;
