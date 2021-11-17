import { EventEmitter } from 'events';

export class PerformanceIndicatorCardConfigModel {
  static getInstance<T>(): PerformanceIndicatorCardConfigModel {
    let model = new PerformanceIndicatorCardConfigModel();
    return model
  }

  public static readonly CALLER_TO_COMP_REFRESH_DATA = "REFRESH_DATA"

  CompToCaller = new EventEmitter();
  CallerToComp = new EventEmitter();
  EventAction = new Map();
}

export class PerformanceIndicatorCardDataModel {
    globalParameters: any;
    isGlobalParams: any;
    isSelfDataLoad: any;
    data: any;
    promoterPrefix: any;
    widgetStyle: any;

    static getInstance<T>(): PerformanceIndicatorCardDataModel {
      let model = new PerformanceIndicatorCardDataModel();
      model.isSelfDataLoad = false;
      model.globalParameters = new Map<any, any>();
      return model;
    }
  }

  export interface PerformanceIndicatorCardData {
    isIconEnable: boolean,
    isMatIcon: boolean,
    icon: string,
    iconColor: string,
    isTextEnable: boolean,
    text: string,
    textColor: string,
    isCountEnable: boolean,
    count: string,
    countColor: string,
    value :number;
    valuecolor: string;
    backgroundColor: string,
    widgetStyle : any
  }
