import { Component, OnInit } from '@angular/core';
import { HorizontalDonutChartDataModel, HorizontalDonutChartConfigModel } from '../../widget/charts/e-donut-chart/horizontal-donut-chart/horizontal-donut-chart.model';
import { NonPermitCostsCardConfigModel, NonPermitCostsCardDataModel } from './non-permit-costs-card.component.model';

@Component({
  selector: 'app-non-permit-costs-card',
  templateUrl: './non-permit-costs-card.component.html',
  styleUrls: ['./non-permit-costs-card.component.css']
})
export class NonPermitCostsCardComponent implements OnInit {

  dataModel : NonPermitCostsCardDataModel;
  configModel : NonPermitCostsCardConfigModel;

  constructor() { }

  ngOnInit(): void {
    this.dataModel = NonPermitCostsCardDataModel.getInstance();
    this.configModel = NonPermitCostsCardConfigModel.getInstance();
  }

}
