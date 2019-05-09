import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss']
})
export class SortByComponent implements OnInit {
  @Output("chache") select = new EventEmitter();
  selectOptions: any[];
  label: string;
  activeOption: string;

  constructor() {}

  ngOnInit() {
    this.selectOptions = [
      { option: 'street', order: 'asc', label: 'Alphabetical'},
      { option: 'price', order: 'asc', label: 'Price - Highest to Lowest'},
      { option: 'price', order: 'desc', label: 'Price - Lowest to Highest'}
    ];
    this.label = "Sort by:";
    this.activeOption = this.selectOptions[0].label;
  }

  onClick(option) {
    this.select.emit(option)
    this.activeOption = option.label;
  }
}
