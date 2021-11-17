import { EventEmitter } from 'events';

export class StepperConfigModel {
    static getInstance<T>(): StepperConfigModel {
      let model = new StepperConfigModel();
      return model
    }
  
    public static readonly CALLER_TO_COMP_REFRESH_DATA = "REFRESH_DATA"
  
    CompToCaller = new EventEmitter();
    CallerToComp = new EventEmitter();
    EventAction = new Map();
  }

  
export class StepperDataModel {
    isGlobalParams: any;
    isSelfDataLoad: any;
    globalParamterKeys: any;
    globalParameters: Map<any, any>
    StepperfilterModel: StepperfilterModel[];
  
    static getInstance<T>(): StepperDataModel {
      let model = new StepperDataModel();
      model.isSelfDataLoad = false;
      model.globalParameters = new Map<any, any>();
      model.StepperfilterModel = [];
      return model;
    }
  }
  
  export class StepperfilterModel {
    code: string;
    color: string;
    count: number;
    countpercentage:string;
    countvisible:string;
    displayheadericon:string;
    display:string;
    iconname:string;
    name:string;
    producttypename:string;
    tasktypesequence:number;
    tasktypeuid:number;
    constructor() { }
  }