import { Component, OnInit } from '@angular/core';
import { WidgetPageBase } from 'src/app/utility/widget/widget-utility/widget-page-base';
import { ServerApiInterfaceServiceService } from 'src/app/services/server-api-interface-service.service';
import { EventActionService } from 'src/app/services/event-action.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountCardDataModel, CountCardConfigModel } from '../../widget/count-card/count-card.model';
import { CurrencyCardDataModel, CurrencyCardConfigModel } from '../../widget/currency-card/currency-card.model';
import { SummaryListCardDataModel, SummaryListCardConfigModel } from '../../widget/summary-list-card/summary-list-card.model';
import { KPIChartDataModel, KPIChartConfigModel } from '../../widget/charts/kpi-chart/kpi-chart.model';
import { RatioChartDataModel, RatioChartConfigModel } from '../../widget/charts/ratio-chart/ratio-chart.model';
import { DonutChartDataModel, DonutChartConfigModel } from '../../widget/charts/donut-chart/donut-chart.model';
import { Chart } from 'chart.js';
import { BarChartDataModel, BarChartConfigModel } from '../../widget/charts/bar-chart/bar-chart.model';
import { MatrixA1Model, MatrixA1ConfigModel } from '../../widget/matrix-a1/matrix-a1-model';

@Component({
  selector: 'app-management-dashboard',
  templateUrl: './management-dashboard.component.html',
  styleUrls: ['./management-dashboard.component.css']
})
export class ManagementDashboardComponent extends WidgetPageBase implements OnInit {

  countCard1DataModel: CountCardDataModel;
  countCard1ConfigModel: CountCardConfigModel;

  countCard2DataModel: CountCardDataModel;
  countCard2ConfigModel: CountCardConfigModel;

  countCard3DataModel: CountCardDataModel;
  countCard3ConfigModel: CountCardConfigModel;

  countCard4DataModel: CountCardDataModel;
  countCard4ConfigModel: CountCardConfigModel;

  currencyCard1DataModel: CurrencyCardDataModel;
  currencyCard1ConfigModel: CurrencyCardConfigModel;

  currencyCard2DataModel: CurrencyCardDataModel;
  currencyCard2ConfigModel: CurrencyCardConfigModel;

  summaryListCard1DataModel: SummaryListCardDataModel;
  summaryListCard1ConfigModel: SummaryListCardConfigModel;

  summaryListCard2DataModel: SummaryListCardDataModel;
  summaryListCard2ConfigModel: SummaryListCardConfigModel;

  summaryListCard3DataModel: SummaryListCardDataModel;
  summaryListCard3ConfigModel: SummaryListCardConfigModel;

  summaryListCard4DataModel: SummaryListCardDataModel;
  summaryListCard4ConfigModel: SummaryListCardConfigModel;

  kPIChartDataModel: KPIChartDataModel;
  kPIChartConfigModel: KPIChartConfigModel;

  ratioChartDataModel: RatioChartDataModel;
  ratioChartConfigModel: RatioChartConfigModel;

  donutChartDataModel: DonutChartDataModel;
  donutChartConfigModel: DonutChartConfigModel;

  barChartDataModel: BarChartDataModel;
  barChartConfigModel: BarChartConfigModel;

  matrixA1DataModel: MatrixA1Model;
  matrixA1ConfigModel: MatrixA1ConfigModel;

  constructor(
    private _serverApi: ServerApiInterfaceServiceService,
    private _eventActionServiceBase: EventActionService,
    private _sessionStorageService: SessionStorageService,
    private _router: Router,
    private _spinner: NgxSpinnerService
  ) {
    super(
      _serverApi,
      _eventActionServiceBase,
      _sessionStorageService,
      _router,
      _spinner
    );

    this.countCard1DataModel = CountCardDataModel.getInstance();
    this.countCard1ConfigModel = CountCardConfigModel.getInstance();

    this.countCard2DataModel = CountCardDataModel.getInstance();
    this.countCard2ConfigModel = CountCardConfigModel.getInstance();

    this.countCard3DataModel = CountCardDataModel.getInstance();
    this.countCard3ConfigModel = CountCardConfigModel.getInstance();

    this.countCard4DataModel = CountCardDataModel.getInstance();
    this.countCard4ConfigModel = CountCardConfigModel.getInstance();

    this.currencyCard1DataModel = CurrencyCardDataModel.getInstance();
    this.currencyCard1ConfigModel = CurrencyCardConfigModel.getInstance();

    this.currencyCard2DataModel = CurrencyCardDataModel.getInstance();
    this.currencyCard2ConfigModel = CurrencyCardConfigModel.getInstance();

    this.summaryListCard1DataModel = SummaryListCardDataModel.getInstance();
    this.summaryListCard1ConfigModel = SummaryListCardConfigModel.getInstance();

    this.summaryListCard2DataModel = SummaryListCardDataModel.getInstance();
    this.summaryListCard2ConfigModel = SummaryListCardConfigModel.getInstance();

    this.summaryListCard3DataModel = SummaryListCardDataModel.getInstance();
    this.summaryListCard3ConfigModel = SummaryListCardConfigModel.getInstance();

    this.summaryListCard4DataModel = SummaryListCardDataModel.getInstance();
    this.summaryListCard4ConfigModel = SummaryListCardConfigModel.getInstance();

    this.kPIChartDataModel = KPIChartDataModel.getInstance();
    this.kPIChartConfigModel = KPIChartConfigModel.getInstance();

    this.ratioChartDataModel = RatioChartDataModel.getInstance();
    this.ratioChartConfigModel = RatioChartConfigModel.getInstance();

    this.donutChartDataModel = DonutChartDataModel.getInstance();
    this.donutChartConfigModel = DonutChartConfigModel.getInstance();

    this.barChartDataModel = BarChartDataModel.getInstance();
    this.barChartConfigModel = BarChartConfigModel.getInstance();

    this.matrixA1DataModel = MatrixA1Model.getInstance();
    this.matrixA1ConfigModel = MatrixA1ConfigModel.getInstance();

  }

  ngOnInit(): void {

    Chart.defaults.global.defaultFontColor = '#fff';

    this.bindCountCard1DataModel();
    this.bindCountCard1ConfigModel();

    this.bindCountCard2DataModel();
    this.bindCountCard2ConfigModel();

    this.bindCountCard3DataModel();
    this.bindCountCard3ConfigModel();

    this.bindCountCard4DataModel();
    this.bindCountCard4ConfigModel();

    this.bindCurrencyCard1DataModel();
    this.bindCurrencyCard1ConfigModel();

    this.bindCurrencyCard2DataModel();
    this.bindCurrencyCard2ConfigModel();

    this.bindSummaryListCard1DataModel();
    this.bindSummaryListCard1ConfigModel();

    this.bindSummaryListCard2DataModel();
    this.bindSummaryListCard2ConfigModel();

    this.bindSummaryListCard3DataModel();
    this.bindSummaryListCard3ConfigModel();

    this.bindSummaryListCard4DataModel();
    this.bindSummaryListCard4ConfigModel();

    this.bindKPIChartDataModel();
    this.bindKPIChartConfigModel();

    this.bindRatioChartDataModel();
    this.bindRatioChartConfigModel();

    this.bindDonutChartDataModel();
    this.bindDonutChartConfigModel();

    this.bindBarChartDataModel();
    this.bindBarChartConfigModel();

    this.bindMatrixA1DataModel();
    this.bindMatrixA1ConfigModel();
  }

  bindCountCard1DataModel() {
    this.countCard1DataModel.data = {
      isIconEnable: true,
      isMatIcon: true,
      icon: 'mark_email_read',
      iconColor: '--count-card1-color',
      isTextEnable: true,
      text: 'Submitted',
      textColor: '--count-card-text-color',
      isCountEnable: true,
      isCountUnderlineEnable: true,
      count: '21',
      countColor: '--count-card1-color',
      backgroundColor: null,
      isLeftStripEnable: true,
      leftStripColor: '--count-card1-color'
    }
  }
  bindCountCard1ConfigModel() {
  }

  bindCountCard2DataModel() {
    this.countCard2DataModel.data = {
      isIconEnable: true,
      isMatIcon: true,
      icon: 'check_circle',
      iconColor: '--count-card2-color',
      isTextEnable: true,
      text: 'Granted',
      textColor: '--count-card-text-color',
      isCountEnable: true,
      isCountUnderlineEnable: true,
      count: '220',
      countColor: '--count-card2-color',
      backgroundColor: null,
      isLeftStripEnable: true,
      leftStripColor: '--count-card2-color'
    }
  }
  bindCountCard2ConfigModel() {
  }

  bindCountCard3DataModel() {
    this.countCard3DataModel.data = {
      isIconEnable: true,
      isMatIcon: true,
      icon: 'sync_alt',
      iconColor: '--theme-color',
      isTextEnable: true,
      text: 'Permit-Modification-Request',
      textColor: '--count-card-text-color',
      isCountEnable: true,
      isCountUnderlineEnable: true,
      count: '12',
      countColor: '--theme-color',
      backgroundColor: null,
      isLeftStripEnable: true,
      leftStripColor: '--theme-color'
    }
  }
  bindCountCard3ConfigModel() {
  }

  bindCountCard4DataModel() {
    this.countCard4DataModel.data = {
      isIconEnable: true,
      isMatIcon: true,
      icon: 'done_all',
      iconColor: '--count-card2-color',
      isTextEnable: true,
      text: 'Progressed',
      textColor: '--count-card-text-color',
      isCountEnable: true,
      isCountUnderlineEnable: true,
      count: '24',
      countColor: '--count-card2-color',
      backgroundColor: null,
      isLeftStripEnable: true,
      leftStripColor: '--count-card2-color'
    }
  }
  bindCountCard4ConfigModel() {
  }

  bindCurrencyCard1DataModel() {
    this.currencyCard1DataModel.data = {
      backgroundColor: '--theme-color',
      countColor: '--white',
      count: 10780,
      isLabelEnable: true,
      label: 'THIS YEAR',
      labelColor: '--white'
    }
  }
  bindCurrencyCard1ConfigModel() {
  }

  bindCurrencyCard2DataModel() {
    this.currencyCard2DataModel.data = {
      backgroundColor: '--theme-color',
      countColor: '--white',
      count: 9900,
      isLabelEnable: true,
      label: 'ACTIVE',
      labelColor: '--white'
    }
  }
  bindCurrencyCard2ConfigModel() {
  }

  bindSummaryListCard1DataModel() {
    this.summaryListCard1DataModel.data = {
      isIconEnable: true,
      isMatIcon: true,
      icon: 'cancel',
      iconColor: '--summary-list-card-color',
      isTextEnable: true,
      text: 'Closed',
      textColor: '--count-card-text-color',
      isCountEnable: true,
      isCountUnderlineEnable: true,
      count: '1498',
      countColor: '--summary-list-card-color',
      backgroundColor: null,
      isLeftStripEnable: true,
      leftStripColor: '--summary-list-card-color'
    }
  }
  bindSummaryListCard1ConfigModel() {
  }

  bindSummaryListCard2DataModel() {
    this.summaryListCard2DataModel.data = {
      isIconEnable: true,
      isMatIcon: true,
      icon: 'cancel',
      iconColor: '--summary-list-card-color',
      isTextEnable: true,
      text: 'Cancelled',
      textColor: '--count-card-text-color',
      isCountEnable: true,
      isCountUnderlineEnable: true,
      count: '474',
      countColor: '--summary-list-card-color',
      backgroundColor: null,
      isLeftStripEnable: true,
      leftStripColor: '--summary-list-card-color'
    }
  }
  bindSummaryListCard2ConfigModel() {
  }

  bindSummaryListCard3DataModel() {
    this.summaryListCard3DataModel.data = {
      isIconEnable: true,
      isMatIcon: true,
      icon: 'block',
      iconColor: '--summary-list-card-color',
      isTextEnable: true,
      text: 'Revoked',
      textColor: '--count-card-text-color',
      isCountEnable: true,
      isCountUnderlineEnable: true,
      count: '6',
      countColor: '--summary-list-card-color',
      backgroundColor: null,
      isLeftStripEnable: true,
      leftStripColor: '--summary-list-card-color'
    }
  }
  bindSummaryListCard3ConfigModel() {
  }

  bindSummaryListCard4DataModel() {
    this.summaryListCard4DataModel.data = {
      isIconEnable: true,
      isMatIcon: true,
      icon: 'cancel',
      iconColor: '--summary-list-card-color',
      isTextEnable: true,
      text: 'Refused',
      textColor: '--count-card-text-color',
      isCountEnable: true,
      isCountUnderlineEnable: true,
      count: '73',
      countColor: '--summary-list-card-color',
      backgroundColor: null,
      isLeftStripEnable: true,
      leftStripColor: '--summary-list-card-color'
    }
  }
  bindSummaryListCard4ConfigModel() {
  }

  bindKPIChartDataModel() {
    this.kPIChartDataModel.data = {
      circleBorderColor: '--kpi-circle-border-color',
      kpiColor: '--kpi-color',
      kpi: '8%',
      circleBackgroundColor: '--kpi-circle-bg-color',
      label: 'ACCEPTED/PAID',
      labelColor: '--kpi-label-color',
      kpiBackgroundColor: '--kpi-background-color'
    }
  }
  bindKPIChartConfigModel() {
  }

  bindRatioChartDataModel() {
    this.ratioChartDataModel.data = {
      entity1Count: 82,
      entity2Count: 2328,
      entity1Color: '--ratio-chart-entity1-color',
      entity2Color: '--ratio-chart-entity2-color',
      label: 'FPN/PERMIT RAISED RATION: 4%',
      labelColor: '--ratio-chart-text-color',
      backgroundColor: '--ratio-chart-background-color'
    }
  }
  bindRatioChartConfigModel() {
  }

  bindDonutChartDataModel() {
    this.donutChartDataModel.data = {
      data: {
        labels: ['Issued', 'Accepted', 'Paid'],
        datasets: [{
          label: 'Count',
          data: [300, 9500, 1000],
          backgroundColor: ['#ffe900', '#0083ff', '#19e582'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'bottom'
        }
      },
      isCenterLabelEnable: true,
      centerLabelColor: '--white',
      centerLabel: '82'
    }
  }
  bindDonutChartConfigModel() {
  }

  bindBarChartDataModel() {
    this.barChartDataModel.data = {
      data: {
        labels: ['Issued', 'Accepted', 'Paid'],
        datasets: [{
          label: 'Count',
          data: [300, 9500, 1000],
          backgroundColor: ['#ffe900', '#0083ff', '#19e582'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    }
  }
  bindBarChartConfigModel() {
  }

  bindMatrixA1DataModel() {
  }
  bindMatrixA1ConfigModel() {
  }

}
