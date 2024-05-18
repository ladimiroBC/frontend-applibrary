import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { AppCrudLoan } from "../../domain/interfaces/app.crud.loan";
import { Observable } from "rxjs";
import { Loan } from "../../domain/entitys/loan";
import { HttpClient, HttpParams } from "@angular/common/http";
import { StudentCheck } from '../../domain/entitys/student.check';

@Injectable()
export class LoanService implements AppCrudLoan {
  private env = environment;

  constructor(private _http: HttpClient) { }

  check(code: string): Observable<StudentCheck> {
    const params = new HttpParams().set('code', code);
    return this._http.get<StudentCheck>(this.env.loanEndPoint.checkStudent, {params});
  }

  getAll(): Observable<Loan[]> {
    const loans = this._http.get<Loan[]>(this.env.loanEndPoint.getAll);
    return loans;
  }

  getById(id: number): Observable<Loan> {
    throw new Error("Method not implemented.");
  }

  create(item: Loan): Observable<Loan> {
    throw new Error("Method not implemented.");
  }

  update(item: Loan): Observable<Loan> {
    throw new Error("Method not implemented.");
  }

  delete(id: number): Observable<Loan> {
    throw new Error('Method not implemented.');
  }
}
