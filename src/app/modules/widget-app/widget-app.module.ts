import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetAppRoutingModule } from './widget-app-routing.module';
import { MaterialModule } from 'src/app/materials/material.module';
import { PermitFilterComponent } from './permit-filter/permit-filter.component';
import { PermitListComponent } from './permit-list/permit-list.component';
import { PermitOverviewTabComponent } from './permit-overview-tab/permit-overview-tab.component';
import { PermitChangeRequestTabComponent } from './permit-change-request-tab/permit-change-request-tab.component';
import { PermitConditionsTabComponent } from './permit-conditions-tab/permit-conditions-tab.component';
import { PermitFpnTabComponent } from './permit-fpn-tab/permit-fpn-tab.component';
import { PermitInspectionsTabComponent } from './permit-inspections-tab/permit-inspections-tab.component';
import { PermitImagesAndFilesTabComponent } from './permit-images-and-files-tab/permit-images-and-files-tab.component';
import { PermitReinstatementTabComponent } from './permit-reinstatement-tab/permit-reinstatement-tab.component';
import { PermitCommentsTabComponent } from './permit-comments-tab/permit-comments-tab.component';
import { PermitActivityLogTabComponent } from './permit-activity-log-tab/permit-activity-log-tab.component';
import { ViewPermitChangeRequestComponent } from './view-permit-change-request/view-permit-change-request.component';
import { ViewPermitFpnComponent } from './view-permit-fpn/view-permit-fpn.component';
import { ViewPermitInspectionComponent } from './view-permit-inspection/view-permit-inspection.component';
import { CreatePermitSelectLocationComponent } from './create-permit-select-location/create-permit-select-location.component';
import { CreatePermitDrawMapComponent } from './create-permit-draw-map/create-permit-draw-map.component';
import { CreatePermitSelectConditionsComponent } from './create-permit-select-conditions/create-permit-select-conditions.component';
import { CreatePermitFormComponent } from './create-permit-form/create-permit-form.component';
import { CreatePermitSummaryComponent } from './create-permit-summary/create-permit-summary.component';
import { CreatePermitConfirmationComponent } from './create-permit-confirmation/create-permit-confirmation.component';
import { BulkUploadComponent } from './bulk-upload/bulk-upload.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RoleListingComponent } from './role-listing/role-listing.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { CreateOrganisationComponent } from './create-organisation/create-organisation.component';
import { OrganisationListingComponent } from './organisation-listing/organisation-listing.component';
import { CreateReinstatementComponent } from './create-reinstatement/create-reinstatement.component';
import { ViewBulkuploadDataComponent } from './view-bulkupload-data/view-bulkupload-data.component';
import { TransformDatePipe } from 'src/app/pipe/transform-date/transform-date.pipe';
import { TransformDateTimePipe } from 'src/app/pipe/transform-date-time/transform-date-time.pipe';
import { ElginmapComponent } from './elginmap/elginmap.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadModule } from 'primeng/fileupload';
import { SharedAppModule } from '../shared/shared.module';
import { CancelPermitConfirmationComponent } from './cancel-permit-confirmation/cancel-permit-confirmation.component';
import { PermitQuickFilterComponent } from './permit-quick-filter/permit-quick-filter.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { OptionalSelectDirectiveModule } from 'src/app/directive/optional-select/optional-select.directive';
import { AddCommentComponent } from './permit-add-comment/add-comment.component';
import { DataDiffA3Component } from './data-diff/data-diff-a3/data-diff-a3.component';
import { NgxTextDiffModule } from 'ngx-text-diff';
import { TableModule } from 'primeng/table';
import { TransformCurrencyPipeModule } from 'src/app/pipe/transform-currency/transform-currency.pipe';
import { InvalidControlScrollDirective } from 'src/app/directive/invalid-control-scroll/invalid-control-scroll.directive';
import { HelperTextPopoverContainerComponent } from './helper-text-popover/helper-text-popover-container/helper-text-popover-container.component';
import { HelperTextComponent } from './helper-text-popover/helper-text/helper-text.component';
import { HelperTextPopoverDirective, HelperTextPopoverDirectiveModule } from 'src/app/directive/helper-text-popover/helper-text-popover.directive';
import { DueListWidgetComponent } from './due-list-widget/due-list-widget.component';
import { WorkReportListComponent } from './work-report-list/work-report-list.component';
import { PotentialFinanceLiableComponent } from './potential-finance-liable/potential-finance-liable.component';
import { PaginatorModule } from 'primeng/paginator';
import { PermitMapTabComponent } from './permit-map-tab/permit-map-tab.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { PermitMapDesignationTabComponent } from './permit-map-designation-tab/permit-map-designation-tab.component';
import { CreateReinstatementFormComponent } from './create-reinstatement-form/create-reinstatement-form.component';
import { RaiseChangeReqConfirmationComponent } from './raise-change-req-confirmation/raise-change-req-confirmation.component';
import { ViewPermitCommentsComponent } from './view-permit-comments/view-permit-comments.component';
import { ReinstatementImagesAndFilesComponent } from './reinstatement-images-and-files/reinstatement-images-and-files.component';
import { CreateReinstatementSummaryComponent } from './create-reinstatement-summary/create-reinstatement-summary.component';
import { GlobalFilterComponent } from './global-filter/global-filter.component';
import { NonPermitCostsCardComponent } from './non-permit-costs-card/non-permit-costs-card.component';
import { WidgetModule } from '../widget/widget.module';
import { PermitCostCardComponent } from './permit-cost-card/permit-cost-card.component';
import { PerformanceIndicatorsCardComponent } from './performance-indicators-card/performance-indicators-card.component';
import { TotalCostCardComponent } from './total-cost-card/total-cost-card.component';
import { CustomerComplianceQualityCardComponent } from './customer-compliance-quality-card/customer-compliance-quality-card.component';
import { EfficiencyFilterComponent } from './efficiency-filter/efficiency-filter.component';
import { AvoidableCostCardComponent } from './avoidable-cost-card/avoidable-cost-card.component';
import { AvoidableCostTableCardComponent } from './avoidable-cost-table-card/avoidable-cost-table-card.component';
import { FpnReceivedTypeCardComponent } from './fpn-received-type-card/fpn-received-type-card.component';
import { FpnReceivedCardComponent } from './fpn-received-card/fpn-received-card.component';
import { TopFpnChargesCardComponent } from './top-fpn-charges-card/top-fpn-charges-card.component';
@NgModule({
  declarations: [
    PermitFilterComponent,
    PermitListComponent,
    PermitOverviewTabComponent,
    PermitChangeRequestTabComponent,
    PermitConditionsTabComponent,
    PermitFpnTabComponent,
    PermitInspectionsTabComponent,
    PermitImagesAndFilesTabComponent,
    PermitReinstatementTabComponent,
    PermitCommentsTabComponent,
    PermitActivityLogTabComponent,
    ViewPermitChangeRequestComponent,
    ViewPermitFpnComponent,
    ViewPermitInspectionComponent,
    CreatePermitSelectLocationComponent,
    CreatePermitDrawMapComponent,
    CreatePermitSelectConditionsComponent,
    CreatePermitFormComponent,
    CreatePermitSummaryComponent,
    CreatePermitConfirmationComponent,
    BulkUploadComponent,
    UserListingComponent,
    CreateUserComponent,
    RoleListingComponent,
    CreateRoleComponent,
    CreateOrganisationComponent,
    OrganisationListingComponent,
    CreateReinstatementComponent,
    ViewBulkuploadDataComponent,
    ElginmapComponent,
    TransformDatePipe,
    TransformDateTimePipe,
    FileUploadComponent,
    CancelPermitConfirmationComponent,
    PermitQuickFilterComponent,
    AddCommentComponent,
    DataDiffA3Component,
    InvalidControlScrollDirective,
    HelperTextPopoverContainerComponent,
    HelperTextComponent,
	  DueListWidgetComponent,
    WorkReportListComponent,
    PotentialFinanceLiableComponent,
    PermitMapTabComponent,
    SiteDetailsComponent,
    PermitMapDesignationTabComponent,
    CreateReinstatementFormComponent,
    RaiseChangeReqConfirmationComponent,
    ViewPermitCommentsComponent,
    ReinstatementImagesAndFilesComponent,
    CreateReinstatementSummaryComponent,
    GlobalFilterComponent,
    NonPermitCostsCardComponent,
    PermitCostCardComponent,
    PerformanceIndicatorsCardComponent,
    TotalCostCardComponent,
    CustomerComplianceQualityCardComponent,
    EfficiencyFilterComponent,
    AvoidableCostCardComponent,
    AvoidableCostTableCardComponent,
    FpnReceivedTypeCardComponent,
    FpnReceivedCardComponent,
    TopFpnChargesCardComponent,
  ],
  imports: [
    CommonModule,
    WidgetAppRoutingModule,
    MaterialModule,
    FileUploadModule,
    SharedAppModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    OptionalSelectDirectiveModule,
    NgxTextDiffModule,
    TableModule,
    TransformCurrencyPipeModule,
    HelperTextPopoverDirectiveModule,
    PaginatorModule,
    WidgetModule
  ],
  exports: [
    PermitFilterComponent,
    PermitListComponent,
    PermitOverviewTabComponent,
    PermitChangeRequestTabComponent,
    PermitConditionsTabComponent,
    PermitFpnTabComponent,
    PermitInspectionsTabComponent,
    PermitImagesAndFilesTabComponent,
    PermitReinstatementTabComponent,
    PermitCommentsTabComponent,
    PermitActivityLogTabComponent,
    ViewPermitChangeRequestComponent,
    UserListingComponent,
    RoleListingComponent,
    OrganisationListingComponent,
    CreateReinstatementComponent,
    ViewBulkuploadDataComponent,
    ElginmapComponent,
    FileUploadComponent,
    CreatePermitDrawMapComponent,
    CreatePermitSelectConditionsComponent,
    CreatePermitFormComponent,
    CreatePermitSummaryComponent,
    CreatePermitConfirmationComponent,
    CreatePermitSelectLocationComponent,
    PermitQuickFilterComponent,
    AddCommentComponent,
    DataDiffA3Component,
    ViewPermitFpnComponent,
    CancelPermitConfirmationComponent,
    ViewPermitInspectionComponent,
    DueListWidgetComponent,
    HelperTextPopoverContainerComponent,
    HelperTextComponent,
    WorkReportListComponent,
    PotentialFinanceLiableComponent,
    PermitMapTabComponent,
    PermitMapDesignationTabComponent,
    RaiseChangeReqConfirmationComponent,
    ViewPermitCommentsComponent,
    CreateReinstatementFormComponent,
    SiteDetailsComponent,
    RaiseChangeReqConfirmationComponent,
    ReinstatementImagesAndFilesComponent,
    CreateReinstatementSummaryComponent,
    GlobalFilterComponent,
    NonPermitCostsCardComponent,
    PermitCostCardComponent,
    PerformanceIndicatorsCardComponent,
    TotalCostCardComponent,
    CustomerComplianceQualityCardComponent,
    EfficiencyFilterComponent,
    AvoidableCostCardComponent,
    AvoidableCostTableCardComponent,
    FpnReceivedTypeCardComponent,
    FpnReceivedCardComponent,
    TopFpnChargesCardComponent
  ]
})
export class WidgetAppModule { }
