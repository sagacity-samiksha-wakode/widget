import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbaordContainerComponent } from './dashboard/dashbaord-container/dashbaord-container.component';
import { PermitListingComponent } from './permit-listing/permit-listing.component';
import { PermitViewComponent } from './permit-view/permit-view.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { PermitManagerJeopardyComponent } from './permit-manager-jeopardy/permit-manager-jeopardy.component'
import { WorkReportListComponent } from '../widget-app/work-report-list/work-report-list.component';
import { ManagementDashboardComponent } from './management-dashboard/management-dashboard.component';
import { environment } from 'src/environments/environment';
import { PRODUCT_SERVICES } from 'src/app/constants/app-repo.constants';
import { PermitListingPmtMgrComponent } from './permit-manager/permit-listing-pmt-mgr/permit-listing-pmt-mgr.component';
import { PermitViewPmtMgrComponent } from './permit-manager/permit-view-pmt-mgr/permit-view-pmt-mgr.component';
import { ManagmentOverviewComponent } from './efficiency-calculator/managment-overview/managment-overview.component';
import { PermitCostsComponent } from './efficiency-calculator/permit-costs/permit-costs.component';
import { FixedPenaltyNoticesComponent } from './efficiency-calculator/fixed-penalty-notices/fixed-penalty-notices.component';

const routes: Routes = [
  { path: 'dashboard', component: DashbaordContainerComponent, data: { title: 'Dashboard' } },
  { path: 'management-dashboard', component: ManagementDashboardComponent, data: { title: 'Management-Dashboard' } },
   { path: 'work-report-list', component: WorkReportListComponent, data: {title: 'work-report-list'}},
  { path: 'permit-manager-jeopardy', component: PermitManagerJeopardyComponent, data: {title: 'Permit-Manager-Jeopardy'}},
  { path: 'permit-listing', component: getPermitListing(), data: { title: 'My Permits' } },
  { path: 'permit-view', component: getPermitViewComponent(), data: { title: 'View Permit' } },
  { path: 'user-management', component: UserManagementComponent, data: { title: 'User Management' } },
  { path: 'management-overview', component: ManagmentOverviewComponent, data: { title: 'Management Overview' } },
  { path: 'permit-costs', component: PermitCostsComponent, data: { title: 'Permit Costs' } },
  { path: 'fixed-penalty-notices', component: FixedPenaltyNoticesComponent, data: { title: 'Fixed Penalty Notices' } },
];

function getPermitListing() {
  switch(environment.productCode) {
    case PRODUCT_SERVICES.PERMIT_MANAGER_PRODUCT_CODE:
        return PermitListingPmtMgrComponent;
    default:
      return PermitListingComponent;
  }
}

function getPermitViewComponent() {
  switch(environment.productCode) {
    case PRODUCT_SERVICES.PERMIT_MANAGER_PRODUCT_CODE:
        return PermitViewPmtMgrComponent;
    default:
      return PermitViewComponent;
  }
}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutRoutingModule { }
