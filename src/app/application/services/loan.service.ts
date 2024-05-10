import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { AppCrudLoan } from "../../domain/interfaces/app.crud.loan";
import { Observable } from "rxjs";
import { Loan } from "../../domain/entitys/loan";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoanService implements AppCrudLoan {
  private env = environment;

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Loan[]> {
    const loans = this._http.get<Loan[]>(this.env.loanEndPoint.getAll);
    return loans;
  }

  getById(id: string): Observable<Loan> {
    throw new Error("Method not implemented.");
  }

  create(item: Loan): Observable<Loan> {
    throw new Error("Method not implemented.");
  }

  update(id: string, item: Loan): Observable<Loan> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Observable<boolean> {
    throw new Error("Method not implemented.");
  }

}
