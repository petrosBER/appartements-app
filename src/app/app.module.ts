import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppartementsListComponent } from "./appartements-list/appartements-list.component";
import { AppartementDetailsComponent } from "./appartement-details/appartement-details.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FavouriteComponent } from "./favourite/favourite.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { ViewModeComponent } from "./view-mode/view-mode.component";
import { SearchComponent } from "./search/search.component";
import { ItemsPerPageComponent } from "./items-per-page/items-per-page.component";

@NgModule({
  declarations: [
    AppComponent,
    AppartementsListComponent,
    AppartementDetailsComponent,
    PageNotFoundComponent,
    NavBarComponent,
    FavouriteComponent,
    ListItemComponent,
    ViewModeComponent,
    SearchComponent,
    ItemsPerPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "appartements/:id",
        component: AppartementDetailsComponent,
        data: { animation: "DetailsPage" }
      },
      {
        path: "appartements",
        component: AppartementsListComponent,
        data: { animation: "ListPage" }
      },
      { path: "favourite", component: FavouriteComponent },
      { path: "", redirectTo: "/appartements", pathMatch: "full" },
      { path: "**", component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
