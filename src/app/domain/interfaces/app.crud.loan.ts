import { Loan } from "../entitys/loan";
import { StudentCheck } from "../entitys/student.check";
import { Crud } from "./crud";
import { Querys } from "./querys";

export interface AppCrudLoan extends Crud<Loan>, Querys<StudentCheck> { }
