import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent {
  @Input("query") query: string;
  @Output("onSearch") search = new EventEmitter();

  onSearch(query: string) {
    this.search.emit(query);
  }
}
