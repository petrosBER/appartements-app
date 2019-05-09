import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"]
})
export class ListItemComponent {
  @Input("item") item;
  @Input("type") type: string;
  @Output("favouriteChange") favouriteChange = new EventEmitter();

  onFavouriteChanged(item) {
    this.favouriteChange.emit(item);
  }
}
