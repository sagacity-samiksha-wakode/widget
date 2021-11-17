import { Component, Input, OnInit } from '@angular/core';
import { PerformanceIndicatorCardConfigModel, PerformanceIndicatorCardDataModel } from './performance-indicator-card-model';

import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { ServerApiInterfaceServiceService } from 'src/app/services/server-api-interface-service.service';
import { ValidationService } from 'src/app/services/validation.service';
import { WidgetComponentBase } from 'src/app/utility/widget/widget-utility/widget-component-base';

@Component({
  selector: 'app-performance-indicators-card',
  templateUrl: './performance-indicators-card.component.html',
  styleUrls: ['./performance-indicators-card.component.css']
})
export class PerformanceIndicatorsCardComponent extends WidgetComponentBase implements OnInit  {

  @Input()  dataModel!: PerformanceIndicatorCardDataModel;
  @Input() configModel!: PerformanceIndicatorCardConfigModel;

  constructor(
    private _formBuilder: FormBuilder,
    // private _serverApiBase: ServerApiInterfaceServiceService,
    private _serverApiBase: ServerApiInterfaceServiceService,
    private _datepipe: DatePipe,
    public _validationService: ValidationService
  ) {
    super(_serverApiBase, _validationService);

  }

  ngOnInit(): void {
    // this.wgOnInint();
  }

  setFieldData() {
  }


  convertData(response: any) {

      }

  setMode(responseDataModel: any) {
  }

  setValue(responseDataModel: any) {
  }

  getControlData() {
    this.wgOnRequest();
    return new Promise((resolve, reject) => {
      // let data = this._baseAppRepoHelperService.getGlobalData(this.dataModel.dataKey);
      let data = {};
      this.wgOnRequestCompleted();
      resolve(data);
    });
  }


}

