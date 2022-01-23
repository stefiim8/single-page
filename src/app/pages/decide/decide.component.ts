import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decide',
  templateUrl: './decide.component.html',
  styleUrls: ['./decide.component.css']
})
export class DecideComponent implements OnInit {
  tableColumns = [
    'SKU ID',
    'Existing Planned Units',
    'Unconstrained Demand',
    'Constrained Demand',
    'AUR',
    'New Planned Units',
    'Additional Revenue Impact'
  ];

  tableRows = ['SKU#4323122', '22K', '26K', '38K', '$16.99', '65K', '$290K'];
  constructor() { }

  ngOnInit(): void {
  }

}
