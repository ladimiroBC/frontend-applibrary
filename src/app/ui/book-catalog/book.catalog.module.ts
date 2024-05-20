import { NgModule } from "@angular/core";
import { BookCatalogComponent } from "./view/book.catalog.component";
import { appBookCatalog } from "./book.catalog.routing";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";
import { ProviderBookService } from "../../application/providers/provider.app.library";

@NgModule({
  declarations: [
    BookCatalogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appBookCatalog)
  ],
  exports: [
    BookCatalogComponent
  ],
  providers: [
    ProviderBookService
  ]
})
export class BookCatalogModule { }
