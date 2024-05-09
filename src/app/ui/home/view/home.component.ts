import { Component, OnInit } from "@angular/core";
import { HomeModel } from "./model/home.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends HomeModel implements OnInit {

  constructor() {
    super();
  }
  ngOnInit(): void {

  }
}
