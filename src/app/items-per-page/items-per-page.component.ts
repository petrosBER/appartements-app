import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "items-per-page",
  templateUrl: "./items-per-page.component.html",
  styleUrls: ["./items-per-page.component.scss"]
})
export class ItemsPerPageComponent implements OnInit {
  @Output("chache") select = new EventEmitter();
  selectOptions: any[];
  label: string;
  activeOption: string;

  constructor() {}

  ngOnInit() {
    this.selectOptions = ["12", "20", "28", "36"];
    this.label = "Items per page:";
    this.activeOption = this.selectOptions[0];
  }

  onClick(option) {
    this.select.emit(option)
    this.activeOption = option;
  }
}
