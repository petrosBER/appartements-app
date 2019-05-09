import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "items-per-page",
  templateUrl: "./items-per-page.component.html",
  styleUrls: ["./items-per-page.component.scss"]
})
export class ItemsPerPageComponent implements OnInit {
  @Output("chache") select = new EventEmitter();
  optionsSelect: any[];

  constructor() {}

  ngOnInit() {
    this.optionsSelect = ["12", "20", "28", "36"];
  }
}
