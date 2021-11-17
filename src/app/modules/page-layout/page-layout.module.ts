import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { DashbaordContainerComponent } from './dashboard/dashbaord-container/dashbaord-container.component';
import { WidgetAppModule } from '../widget-app/widget-app.module';
import { DialogModule } from 'primeng/dialog';
import { MaterialModule } from 'src/app/materials/material.module';
import { PermitListingComponent } from './permit-listing/permit-listing.component';
import { PermitViewComponent } from './permit-view/permit-view.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SharedAppModule } from '../shared/shared.module';
import { TransformCurrencyPipeModule } from 'src/app/pipe/transform-currency/transform-currency.pipe';
import { NgxMatNativeDateModule, NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import * as Chart from 'chart.js';
import { WidgetModule } from '../widget/widget.module';
import { PermitManagerJeopardyComponent } from './permit-manager-jeopardy/permit-manager-jeopardy.component';
import { ManagementDashboardComponent } from './management-dashboard/management-dashboard.component';
import { HelperTextPopoverDirectiveModule } from 'src/app/directive/helper-text-popover/helper-text-popover.directive';
import { ValidateTokenComponent } from './validate-token/validate-token.component';
import { PermitListingPmtMgrComponent } from './permit-manager/permit-listing-pmt-mgr/permit-listing-pmt-mgr.component';
import { PermitViewPmtMgrComponent } from './permit-manager/permit-view-pmt-mgr/permit-view-pmt-mgr.component';
import { ManagmentOverviewComponent } from './efficiency-calculator/managment-overview/managment-overview.component';
import { PermitCostsComponent } from './efficiency-calculator/permit-costs/permit-costs.component';
import { FixedPenaltyNoticesComponent } from './efficiency-calculator/fixed-penalty-notices/fixed-penalty-notices.component';

@NgModule({
  declarations: [
    DashbaordContainerComponent,
    PermitListingComponent,
    PermitViewComponent,
    UserManagementComponent,
    ManagementDashboardComponent,
    PermitManagerJeopardyComponent,
    ValidateTokenComponent,
    PermitListingPmtMgrComponent,
    PermitViewPmtMgrComponent,
    ManagmentOverviewComponent,
    PermitCostsComponent,
    FixedPenaltyNoticesComponent,
    
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    WidgetAppModule,
    WidgetModule,
    DialogModule,
    MaterialModule,
    SharedAppModule,
    TransformCurrencyPipeModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    HelperTextPopoverDirectiveModule
  ]
})
export class PageLayoutModule { }
