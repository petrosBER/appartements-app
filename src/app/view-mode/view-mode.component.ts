import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "view-mode",
  templateUrl: "./view-mode.component.html",
  styleUrls: ["./view-mode.component.scss"]
})
export class ViewModeComponent implements OnInit {
  @Input("mode") mode: string;
  @Output("change") change = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
