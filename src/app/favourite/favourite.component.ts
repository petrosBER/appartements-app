import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "favourite",
  templateUrl: "./favourite.component.html",
  styleUrls: ["./favourite.component.scss"]
})
export class FavouriteComponent implements OnInit {
  @Input("isFavourite") isSelected: boolean;
  @Output("change") change = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit();
  }
}
