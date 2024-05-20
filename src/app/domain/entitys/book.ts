import { Loan } from "./loan"

export type Book = {
  idBook?: number
  name: string
  editorial: string
  autor: string
  stateBook: boolean,
  img: string
  registerCode: string
  loans: Loan[];
  loanStatus?: string;
}
