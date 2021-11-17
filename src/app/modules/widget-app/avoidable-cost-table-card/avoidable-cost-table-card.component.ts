import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  type: string;
  permitNumber: string;
  location: string;
  amount: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {type: 'Type', permitNumber: 'Permit Number', location: 'Location', amount: '£3,000'},
  {type: 'Type', permitNumber: 'Permit Number', location: 'Location', amount: '£3,000'},
  {type: 'Type', permitNumber: 'Permit Number', location: 'Location', amount: '£3,000'},
  {type: 'Type', permitNumber: 'Permit Number', location: 'Location', amount: '£3,000'},
  {type: 'Type', permitNumber: 'Permit Number', location: 'Location', amount: '£3,000'},
  {type: 'Type', permitNumber: 'Permit Number', location: 'Location', amount: '£3,000'},
  {type: 'Type', permitNumber: 'Permit Number', location: 'Location', amount: '£3,000'},
  {type: 'Type', permitNumber: 'Permit Number', location: 'Location', amount: '£3,000'},
  {type: 'Type', permitNumber: 'Permit Number', location: 'Location', amount: '£3,000'},
  {type: 'Type', permitNumber: 'Permit Number', location: 'Location', amount: '£3,000'},
];
@Component({
  selector: 'app-avoidable-cost-table-card',
  templateUrl: './avoidable-cost-table-card.component.html',
  styleUrls: ['./avoidable-cost-table-card.component.css']
})
export class AvoidableCostTableCardComponent implements OnInit {
  displayedColumns: string[] = ['type', 'permitNumber', 'location', 'amount'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
