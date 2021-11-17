import { EventEmitter } from 'events';

export class HorizontalDonutChartConfigModel {
  static getInstance<T>(): HorizontalDonutChartConfigModel {
    let model = new HorizontalDonutChartConfigModel();
    return model
  }

  public static readonly CALLER_TO_COMP_REFRESH_DATA = "REFRESH_DATA"
  public static readonly ON_LEGEND_CLICKED = "ON_LEGEND_CLICKED"

  CompToCaller = new EventEmitter();
  CallerToComp = new EventEmitter();
  EventAction = new Map();
}

export class HorizontalDonutChartDataModel {
    globalParameters: any;
    isGlobalParams: any;
    isSelfDataLoad: any;
    data: any;
    widgetStyle: any;

    static getInstance<T>(): HorizontalDonutChartDataModel {
      let model = new HorizontalDonutChartDataModel();
      model.isSelfDataLoad = false;
      model.globalParameters = new Map<any, any>();
      model.data = new Object();
      model.data.labels = ['Traffic Management','Reinstatement','Commercial Management','Street Works Management','HA Invoice Reconciliation']
      model.data.datasets= [
        { 
          data: [240,540,120,240,70],
          backgroundColor: ['#3E6FB6','#6296E2','#7BB1FC','#7BB1FC','#7BB1FC'],
          fill: false,
          borderWidth:2, 
          label : 'Sleep',
        },        
      ]
      return model;
    }
  }

