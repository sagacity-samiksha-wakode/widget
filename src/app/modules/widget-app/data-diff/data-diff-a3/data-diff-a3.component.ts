import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
//import { WidgetConstants } from 'src/app/modules/widgets/widget-constants';
import { DataDiffA3Model, DataDiffA3ConfigModel, DataDiffA3ColumnDataItemModel } from './data-diff-a3-model';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServerApiInterfaceServiceService } from 'src/app/services/server-api-interface-service.service';
import { WidgetComponentBase } from 'src/app/utility/widget/widget-utility/widget-component-base';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-data-diff-a3',
  templateUrl: './data-diff-a3.component.html',
  styleUrls: ['./data-diff-a3.component.css']
})
export class DataDiffA3Component extends WidgetComponentBase implements OnInit {

  displayedColumns: DataDiffA3ColumnDataItemModel[] = [];
  isLoading = false;

  @Input() dataModel: DataDiffA3Model;
  @Input() configModel: DataDiffA3ConfigModel;

  constructor(
    private _serverApi: ServerApiInterfaceServiceService,
    private _toastnotificationservice: ToastrService,
    private _changeDetectorRef: ChangeDetectorRef,
    private _spinner: NgxSpinnerService,
    private _validationService: ValidationService
  ) {
    super(_serverApi, _validationService);
  }

  ngOnInit() {
    // this.configModel.CallerToComp.addListener(WidgetConstants.CALLER_TO_COMP_REFRESH_DATA, () => {
    //   this.RefreshData();
    // });

    // this.dataModel.dataSource1 = [];
    // this.dataModel.dataSource2 = [];

    // this.setData();

    this.wgOnInit();
  }

  setFieldData() {
  }

  getControlData() {
    let alterationApplicationId = this.dataModel.globalParameters.get("alterationApplicationId");
    console.log('alterationApplicationId', alterationApplicationId)
    return this.wgAPIMethodGet(`/api/v1/applications/${alterationApplicationId}/compare-alterations`);
  }

  convertData(response: any) {

    let displayedColumns = [];
    let dataSurce1Object: any = new Object();
    let dataSurce2Object: any = new Object();

    if (response && (response.length > 0)) {
      response.forEach(field => {
        let colData = new DataDiffA3ColumnDataItemModel();
        colData.field = field.field_name
        colData.name = field.field_name
        displayedColumns.push(colData);
        dataSurce1Object[field.field_name] = {
          headername: field.field_name,
          isupdatesuccess: true,
          value: field.changed_value
        }
        dataSurce2Object[field.field_name] = {
          headername: field.field_name,
          isupdatesuccess: true,
          value: field.original_value
        }
      });
    }

    return [displayedColumns, dataSurce1Object, dataSurce2Object];

  }

  setMode(responseDataModel: any) {
  }

  setValue(responseDataModel: any) {

    this.displayedColumns = [];
    this.dataModel.dataSource1 = [];
    this.dataModel.dataSource2 = [];

    this.displayedColumns = responseDataModel[0];
    this.dataModel.dataSource1.push(responseDataModel[1]);
    this.dataModel.dataSource2.push(responseDataModel[2]);

    this._changeDetectorRef.detectChanges();

  }

  // InitComponent() {
  //   if (this.dataModel.isSelfDataLoad) {
  //     this.RefreshData();
  //   }
  // }

  // RefreshData() {
  //   this.getApiData();
  // }

  // getApiData() {

  //   this._spinner.show();

  //   const apiUrlConst = this.dataModel.apiDataUrl;

  //   let reqData = Object();
  //   reqData.data = Object();

  //   reqData.data = this.dataModel.apireqdata;
  //   reqData.data.id = this.dataModel.widgetinstanceid;

  //   this._serverApi.post<any, any>(apiUrlConst, reqData.data).subscribe(response => {
  //     this._spinner.hide();
  //     if (response) {
  //       // console.log("diff resp:", response);
  //       this.dataModel.dataSource2 = [];
  //       this.displayedColumns = [];
  //       this.dataModel.dataSource1 = this.convertRecordsData(this.dataModel.dataSource1);
  //       this.dataModel.dataSource2 = this.convertRecordsData(response.headerdata);
  //       this.setDynamicColumns(this.dataModel.dataSource1);
  //     }
  //   }, error => {
  //     this._spinner.hide();
  //   });
  // }

  // setData() {
  //   // this.dataModel.dataSource1 = [{ "Access Central Phone Book": { "headername": "Access Central Phone Book", "isupdatesuccess": false, "value": "TRUE" }, "Voice Email": { "headername": "Voice Email", "isupdatesuccess": true, "value": "asd@asd.com" } }]
  //   // this.dataModel.dataSource2 = [{ "Access Central Phone Book": { "headername": "Access Central Phone Book", "isupdatesuccess": false, "value": "TRUE" }, "Voice Email": { "headername": "Voice Email", "isupdatesuccess": true, "value": "test@test.com" } }]
  //   this.dataModel.dataSource1 = [
  //     {
  //       "Proposed Start Date": {
  //         "headername": "Proposed Start Date",
  //         "isupdatesuccess": false,
  //         "value": "12/12/20 18:20"
  //       },
  //       "Proposed End Date": {
  //         "headername": "Proposed End Date",
  //         "isupdatesuccess": true,
  //         "value": "20/12/20 14:10"
  //       },
  //       "Footway Closure": {
  //         "headername": "Footway Closure",
  //         "isupdatesuccess": true,
  //         "value": "No"
  //       },
  //       "Excavation Required": {
  //         "headername": "Excavation Required",
  //         "isupdatesuccess": true,
  //         "value": "No"
  //       },
  //       "Is Lane Rental Applicable": {
  //         "headername": "Is Lane Rental Applicable",
  //         "isupdatesuccess": true,
  //         "value": "No"
  //       },
  //       "Traffic Management Required": {
  //         "headername": "Traffic Management Required",
  //         "isupdatesuccess": true,
  //         "value": "Contra Flow"
  //       }
  //     }
  //   ];
  //   this.dataModel.dataSource2 = [
  //     {
  //       "Proposed Start Date": {
  //         "headername": "Proposed Start Date",
  //         "isupdatesuccess": false,
  //         "value": "14/12/20 18:20"
  //       },
  //       "Proposed End Date": {
  //         "headername": "Proposed End Date",
  //         "isupdatesuccess": true,
  //         "value": "23/12/20 14:10"
  //       },
  //       "Footway Closure": {
  //         "headername": "Footway Closure",
  //         "isupdatesuccess": true,
  //         "value": "Yes Provide Alternative Route"
  //       },
  //       "Excavation Required": {
  //         "headername": "Excavation Required",
  //         "isupdatesuccess": true,
  //         "value": "No"
  //       },
  //       "Is Lane Rental Applicable": {
  //         "headername": "Is Lane Rental Applicable",
  //         "isupdatesuccess": true,
  //         "value": "No"
  //       },
  //       "Traffic Management Required": {
  //         "headername": "Traffic Management Required",
  //         "isupdatesuccess": true,
  //         "value": "Road Closure"
  //       }
  //     }
  //   ];
  //   this.setDynamicColumns(this.dataModel.dataSource1);
  // }

  // prepareData(datasource1, datasource2) {
  //   this.dataModel.dataSource1 = [];
  //   this.dataModel.dataSource2 = [];
  //   this.dataModel.dataSource1 = datasource1;
  //   this.dataModel.dataSource2 = datasource2;
  //   this.setDynamicColumns(this.dataModel.dataSource1);
  // }

  // setDynamicColumns(data) {
  //   if (data.length > 0) {
  //     this.displayedColumns = [];
  //     const colNames = Object.keys(data[0]);
  //     colNames.forEach(col => {
  //       let colData = new DataDiffA3ColumnDataItemModel();
  //       colData.field = col
  //       colData.name = col
  //       this.displayedColumns.push(colData);
  //     });
  //     console.log('this.displayedColumns', this.displayedColumns);
  //     this._changeDetectorRef.detectChanges();
  //   }
  // }


  // // removing status and view columns
  // convertRecordsData(tabledata) {
  //   let convertedData = [];
  //   tabledata.forEach(updatedItem => {
  //     const dataItem = Object();
  //     Object.keys(updatedItem).forEach(key => {
  //       // to remove status and view header from records
  //       if (key != "status" && key != "view") {
  //         Object.assign(dataItem, { [updatedItem[key].headername]: updatedItem[key].value });
  //       }
  //     });

  //     convertedData.push(dataItem);

  //   });
  //   return convertedData;
  // }

  getRowValue(rowdata, colname) {
    switch (this.dataModel.bindingStrategy) {
      case 1:
        return rowdata[colname].value;
      default:
        return rowdata[colname];
    }
  }

  compareData(data1, data3, colname) {
    let value1;
    let value2;
    switch (this.dataModel.bindingStrategy) {
      case 1:
        value1 = data1[colname].value;
        value2 = data3[colname].value;
        break
      default:
        value1 = data1[colname];
        value2 = data3[colname];
        break
    }
    if (value1 == value2) {
      return true;
    } else {
      return false;
    }
  }

  onClick(data, actionName) {

    let eventDataObj = Object();
    eventDataObj.eventData = data;

    let action = actionName;

    if (this.configModel.EventAction.has(action)) {
      this.configModel.CompToCaller.emit(action, eventDataObj);
    }

  }

  ngOnDestroy(): void {

  }

}
