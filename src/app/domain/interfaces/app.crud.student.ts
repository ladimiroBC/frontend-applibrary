import { Student } from "../entitys/student";
import { Crud } from "./crud";

export interface AppCrudStudent extends Crud<Student> { }
