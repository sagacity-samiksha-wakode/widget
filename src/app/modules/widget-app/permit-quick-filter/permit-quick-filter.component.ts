import { Component, OnInit, Input } from '@angular/core';
import { WidgetComponentBase } from 'src/app/utility/widget/widget-utility/widget-component-base';
import { ServerApiInterfaceServiceService } from 'src/app/services/server-api-interface-service.service';
import { AppRepoHelperService } from 'src/app/services/app-repo-helper.service';
import { ValidationService } from 'src/app/services/validation.service';
import { PermitQuickFilterDataModel, PermitQuickFilterConfigModel } from './permit-quick-filter.model';
import { AppRepoService } from 'src/app/services/app-repo.service';
import { FILTER_TYPE } from 'src/app/app-constants';
import { AppFilterModel } from 'src/app/models/common/app-filter';
import { HELPER_TEXT_DATA_DOMAIN } from 'src/app/constants/db.constants';

@Component({
  selector: 'app-permit-quick-filter',
  templateUrl: './permit-quick-filter.component.html',
  styleUrls: ['./permit-quick-filter.component.css']
})
export class PermitQuickFilterComponent extends WidgetComponentBase implements OnInit {

  @Input() dataModel: PermitQuickFilterDataModel;
  @Input() configModel: PermitQuickFilterConfigModel;

  quickFilterSelectedValue: string = '_all';
  quickFilterHelperData: any[] = [];
  constructor(
    private _serverApiBase: ServerApiInterfaceServiceService,
    private _appRepoHelperService: AppRepoHelperService,
    private _appRepoService: AppRepoService,
    private _validationService: ValidationService
  ) {
    super(_serverApiBase, _validationService);
  }

  ngOnInit(): void {
    this.wgOnInit();
  }

  setFieldData() {
    this.quickFilterHelperData = [...this._appRepoService.appRepo.helperTextDataById.values()].filter((item) => item.domain === HELPER_TEXT_DATA_DOMAIN.QUICK_FILTER);
  }

  getControlData() {
    let url = "/api/v1/applications/quick-filter-count";
    return this.wgAPIMethodGet(url);
  }

  convertData(response: any) {
    console.log(response);
    var i=1;

    this.dataModel.quickFilters[i++].count = response.defects;
    this.dataModel.quickFilters[i++].count = response.fpn;
    this.dataModel.quickFilters[i++].count = response.to_do;
    this.dataModel.quickFilters[i++].count = response.planning;
    this.dataModel.quickFilters[i++].count = response.paa_follow_up;
    this.dataModel.quickFilters[i++].count = response.awaiting_grant;
    this.dataModel.quickFilters[i++].count = response.awaiting_work_start;
    this.dataModel.quickFilters[i++].count = response.in_progress;
    this.dataModel.quickFilters[i++].count = response.awaiting_work_stop;
    this.dataModel.quickFilters[i++].count = response.registration_due;
    this.dataModel.quickFilters[i++].count = response.interim_to_perm;
    
    return this.dataModel;
  }

  setMode(responseDataModel: any) {
  }

  setValue(responseDataModel: any) {

    let filterGlobalParams: AppFilterModel = this._appRepoService.appRepo.appGlobalPersistantData.get(this.dataModel.appGlobalParamsKeyForQuickFilter);

    if (filterGlobalParams.persistantfilterType == FILTER_TYPE.QUICK_FILTER) {
      this.quickFilterSelectedValue = filterGlobalParams.persistantQuickFilterModel.filterValue;
      this.emitEvent(PermitQuickFilterConfigModel.COMP_TO_CALLER_APPLY_FILTER);
    }

  }

  getValue() {
    let data = {
      quickFilter: this.quickFilterSelectedValue,
    }
    return data;
  }

  onQuickFilterSelectionChange(value) {

    this.quickFilterSelectedValue = value.value;

    let filterGlobalParams = this._appRepoService.appRepo.appGlobalPersistantData.get(this.dataModel.appGlobalParamsKeyForQuickFilter);
    filterGlobalParams.persistantfilterType = FILTER_TYPE.QUICK_FILTER;
    filterGlobalParams.persistantQuickFilterModel.filterValue = this.quickFilterSelectedValue;
    this._appRepoService.appRepo.appGlobalPersistantData.set(this.dataModel.appGlobalParamsKeyForQuickFilter, filterGlobalParams);

    this.emitEvent(PermitQuickFilterConfigModel.COMP_TO_CALLER_APPLY_FILTER);

  }

  reset() {
    this.quickFilterSelectedValue = '';
  }

  getHelpTextData(data) {
    let helper_id: any;
    this.quickFilterHelperData.forEach((val) => {
      if (val.title == data.helperTitle && val.description !="") {
        helper_id = val.helper_id;
      }
    });

    return helper_id;
  }

}
