import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountCardComponent } from './count-card/count-card.component';
import { MaterialModule } from 'src/app/materials/material.module';
import { CurrencyCardComponent } from './currency-card/currency-card.component';
import { SummaryListCardComponent } from './summary-list-card/summary-list-card.component';
import { TransformCurrencyPipeModule } from 'src/app/pipe/transform-currency/transform-currency.pipe';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { KpiChartComponent } from './charts/kpi-chart/kpi-chart.component';
import { RatioChartComponent } from './charts/ratio-chart/ratio-chart.component';
import { DonutChartComponent } from './charts/donut-chart/donut-chart.component';
import { MatrixComponent } from './matrix/matrix.component';
import { StepperComponent } from './stepper/stepper.component';
import { MatrixA1Component } from './matrix-a1/matrix-a1.component';
import { NavControlComponent } from './nav-control/nav-control.component';
import { HorizontalDonutChartComponent } from './charts/e-donut-chart/horizontal-donut-chart/horizontal-donut-chart.component';
import { VerticalDonutChartComponent } from './charts/e-donut-chart/vertical-donut-chart/vertical-donut-chart.component';
import { KpiBoxComponent } from './kpi-box/kpi-box.component';
import { EPieChartComponent } from './charts/e-pie-chart/e-pie-chart.component';
import { MixedColumnLineChartComponent } from './charts/mixed-column-line-chart/mixed-column-line-chart.component';

@NgModule({
  declarations: [
    CountCardComponent,
    CurrencyCardComponent,
    SummaryListCardComponent,
    BarChartComponent,
    KpiChartComponent,
    RatioChartComponent,
    DonutChartComponent,
    DonutChartComponent,
    MatrixComponent,
    StepperComponent,
    MatrixA1Component,
    NavControlComponent,
    VerticalDonutChartComponent,
    HorizontalDonutChartComponent,
    KpiBoxComponent,
    EPieChartComponent,
    MixedColumnLineChartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TransformCurrencyPipeModule
  ],
  exports: [
    CountCardComponent,
    CurrencyCardComponent,
    SummaryListCardComponent,
    BarChartComponent,
    KpiChartComponent,
    RatioChartComponent,
    DonutChartComponent,
    MatrixComponent,
    StepperComponent,
    MatrixA1Component,
    NavControlComponent,
    HorizontalDonutChartComponent,
    VerticalDonutChartComponent,
    KpiBoxComponent,
    EPieChartComponent,
    MixedColumnLineChartComponent
  ]
})
export class WidgetModule { }
