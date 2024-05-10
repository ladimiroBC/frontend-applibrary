import appTextHome from '../../../../core/mock/home.text.json';
import { Student } from '../../../../domain/entitys/student';

export abstract class HomeModel {
  student!: Student[];
  textHome = appTextHome.homeText;
}
