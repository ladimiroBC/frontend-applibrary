import appTextHome from '../../../../core/mock/home.text.json';
import { Book } from '../../../../domain/entitys/book';
import { Loan } from '../../../../domain/entitys/loan';
import { Student } from '../../../../domain/entitys/student';

export abstract class HomeModel {
  students!: Student[];
  books!: Book[];
  loans!: Loan[];
  numberOfStudents: number = 0;
  numberOfBooks: number = 0;
  numberOfLoans: number = 0;
  textHome = appTextHome.homeText;
}
