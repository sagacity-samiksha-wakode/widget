import { EventEmitter } from 'events';
import { HorizontalDonutChartConfigModel, HorizontalDonutChartDataModel } from '../../widget/charts/e-donut-chart/horizontal-donut-chart/horizontal-donut-chart.model';

export class NonPermitCostsCardConfigModel {

    donutConfigModel : HorizontalDonutChartConfigModel;
  

  static getInstance<T>(): NonPermitCostsCardConfigModel {
    let model = new NonPermitCostsCardConfigModel();
    model.donutConfigModel = HorizontalDonutChartConfigModel.getInstance(); 
    return model
  }

  public static readonly CALLER_TO_COMP_REFRESH_DATA = "REFRESH_DATA"

  CompToCaller = new EventEmitter();
  CallerToComp = new EventEmitter();
  EventAction = new Map();
}

export class NonPermitCostsCardDataModel {
    globalParameters: any;
    isGlobalParams: any;
    isSelfDataLoad: any;
    data: any;
    widgetStyle: any;
    donutDataModel: HorizontalDonutChartDataModel;
    

    static getInstance<T>(): NonPermitCostsCardDataModel {
      let model = new NonPermitCostsCardDataModel();
      model.isSelfDataLoad = false;
      model.globalParameters = new Map<any, any>();
    
      model.donutDataModel = HorizontalDonutChartDataModel.getInstance();
      
      return model;
    }
  }

