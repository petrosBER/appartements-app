import { Component, OnInit } from "@angular/core";
import { AppartementsService } from "../services/appartements.service";
import { Filter } from "../modules/filter";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-appartements-list",
  templateUrl: "./appartements-list.component.html",
  styleUrls: ["./appartements-list.component.scss"],
  animations: [
    trigger("switch", [
      state(
        "fadeIn",
        style({
          opacity: "1",
          transform: "translateY(0)"
        })
      ),
      transition("void => *", [
        style({ opacity: "0", transform: "translateY(20px)" }),
        animate("300ms ease-out")
      ])
    ])
  ]
})
export class AppartementsListComponent {
  appartements: any[];
  viewMode: string;
  pagination;
  searchQuery: string;
  showFavourites: boolean;

  constructor(service: AppartementsService) {
    this.appartements = service.getAppartements();
    this.viewMode = "grid";
    this.pagination = {
      itemsPerPage: 12,
      currentPage: 1
    };
    this.searchQuery = "";
    this.showFavourites = false;
  }

  onViewModeChanged(mode) {
    this.viewMode = mode;
  }

  onItemsPerPageChange(items) {
    this.pagination.itemsPerPage = items;
  }

  makeFavourite(item) {
    const index = this.appartements.findIndex(
      appartement => appartement === item
    );

    if ("isFavourite" in this.appartements[index]) {
      this.appartements[index].isFavourite = !this.appartements[index]
        .isFavourite;
    } else this.appartements[index].isFavourite = true;
  }

  showFavourite() {
    this.showFavourites = !this.showFavourites;
    this.searchQuery = "";
  }

  onPaginationChanged(page) {
    this.pagination.currentPage = page;
  }

  onSortChange(sort) {
    this.appartements = this.appartements.sort((A, B) => {
      let itemA;
      let itemB;

      switch (sort.option) {
        case "street":
          itemA = A[sort.option].toLowerCase();
          itemB = B[sort.option].toLowerCase();
          return this.sort(itemB, itemA);
          break;
        case "price":
          itemA = A[sort.option];
          itemB = B[sort.option];
          return sort.order === "asc"
            ? this.sort(itemA, itemB)
            : this.sort(itemB, itemA);
          break;
        default:
          return this.sort(itemA, itemB);
          break;
      }
    });
  }

  private sort(A, B) {
    if (A < B) return 1;
    if (B < A) return -1;
    return 0;
  }

  onSearchChange(query: string) {
    this.searchQuery = query;
    this.showFavourites = false;
  }

  search(data, property, query) {
    return data.filter(item =>
      item[property].toLowerCase().startsWith(query.toLowerCase())
    );
  }

  getList() {
    let filteredList = this.appartements;

    if (this.searchQuery !== "")
      filteredList = this.search(this.appartements, "street", this.searchQuery);
    else if (this.showFavourites) {
      filteredList = this.appartements.filter(item => item.isFavourite);
    }

    return filteredList;
  }
}
