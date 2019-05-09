import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dropdow',
  templateUrl: './dropdow.component.html',
  styleUrls: ['./dropdow.component.scss']
})
export class DropdowComponent implements OnInit {
  @Input('options') options: any[];
  @Input('label') label: string;
  activeOption: string;

  constructor() {}

  ngOnInit() {
    this.activeOption = this.options[0];
  }

  onSelect(option) {
    this.activeOption = option;
  }
}
