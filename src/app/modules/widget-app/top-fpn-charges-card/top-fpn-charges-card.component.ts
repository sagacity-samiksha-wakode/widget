import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-fpn-charges-card',
  templateUrl: './top-fpn-charges-card.component.html',
  styleUrls: ['./top-fpn-charges-card.component.css']
})
export class TopFpnChargesCardComponent implements OnInit {
  Arr = Array; 
  num:number = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
