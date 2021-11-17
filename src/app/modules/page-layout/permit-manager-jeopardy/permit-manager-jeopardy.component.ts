import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventActionService } from 'src/app/services/event-action.service';
import { ServerApiInterfaceServiceService } from 'src/app/services/server-api-interface-service.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { WidgetComponentBase } from 'src/app/utility/widget/widget-utility/widget-component-base';
import { WidgetPageBase } from 'src/app/utility/widget/widget-utility/widget-page-base';
import { DueListConfigModel, DueListDataModel } from '../../widget-app/due-list-widget/due-list-widget.model';
import { FinanceLiableConfigModel, FinanceLiableDataModel } from '../../widget-app/potential-finance-liable/potential-finance-liable.model';
import { CountCardConfigModel, CountCardDataModel } from '../../widget/count-card/count-card.model';
import { MatrixConfigModel, MatrixItemModel, MatrixModel } from '../../widget/matrix/matrix.model';
import { StepperDataModel, StepperConfigModel } from '../../widget/stepper/stepper.model';

@Component({
  selector: 'app-permit-manager-jeopardy',
  templateUrl: './permit-manager-jeopardy.component.html',
  styleUrls: ['./permit-manager-jeopardy.component.css']
})
export class PermitManagerJeopardyComponent extends WidgetPageBase implements OnInit {
  stapperdata: any;
  StepperDataModel: StepperDataModel;
  StepperConfigModel: StepperConfigModel;
  DueListDataModel1: DueListDataModel;
  DueListConfigModel1: DueListConfigModel;
  DueListDataModel2: DueListDataModel;
  DueListConfigModel2: DueListConfigModel;
  FinanceLiableDataModel1: FinanceLiableDataModel;
  FinanceLiableConfigModel1: FinanceLiableConfigModel;
  FinanceLiableDataModel2: FinanceLiableDataModel;
  FinanceLiableConfigModel2: FinanceLiableConfigModel;
  countCard1DataModel: CountCardDataModel;
  countCard1ConfigModel: CountCardConfigModel;
  countCard2DataModel: CountCardDataModel;
  countCard2ConfigModel: CountCardConfigModel;
  countCard3DataModel: CountCardDataModel;
  countCard3ConfigModel: CountCardConfigModel;
  countCard4DataModel: CountCardDataModel;
  countCard4ConfigModel: CountCardConfigModel;
  countCard5DataModel: CountCardDataModel;
  countCard5ConfigModel: CountCardConfigModel;

  MatrixConfigModel: MatrixConfigModel;
  MatrixModel: MatrixModel;

  constructor(
    private _serverApi: ServerApiInterfaceServiceService,
    private _eventActionServiceBase: EventActionService,
    private _sessionStorageService: SessionStorageService,
    private _router: Router,
    private _spinner: NgxSpinnerService
  ) {
    super(
      _serverApi,
      _eventActionServiceBase,
      _sessionStorageService,
      _router,
      _spinner
    );

    this.StepperDataModel = StepperDataModel.getInstance();
    this.StepperConfigModel = StepperConfigModel.getInstance();
    this.DueListDataModel1 = DueListDataModel.getInstance();
    this.DueListConfigModel1 = DueListConfigModel.getInstance();
    this.DueListDataModel2 = DueListDataModel.getInstance();
    this.DueListConfigModel2 = DueListConfigModel.getInstance();
    this.FinanceLiableDataModel1 = FinanceLiableDataModel.getInstance();
    this.FinanceLiableConfigModel1 = FinanceLiableConfigModel.getInstance();
    this.FinanceLiableDataModel2 = FinanceLiableDataModel.getInstance();
    this.FinanceLiableConfigModel2 = FinanceLiableConfigModel.getInstance();
    this.countCard1DataModel = CountCardDataModel.getInstance();
    this.countCard1ConfigModel = CountCardConfigModel.getInstance();
    this.countCard2DataModel = CountCardDataModel.getInstance();
    this.countCard2ConfigModel = CountCardConfigModel.getInstance();
    this.countCard3DataModel = CountCardDataModel.getInstance();
    this.countCard3ConfigModel = CountCardConfigModel.getInstance();
    this.countCard4DataModel = CountCardDataModel.getInstance();
    this.countCard4ConfigModel = CountCardConfigModel.getInstance();
    this.countCard5DataModel = CountCardDataModel.getInstance();
    this.countCard5ConfigModel = CountCardConfigModel.getInstance();
    this.MatrixModel = MatrixModel.getInstance();
    this.MatrixConfigModel = MatrixConfigModel.getInstance();
  }

  ngOnInit(): void {
    this.getstapperdata();
    this.getDueListData();
    this.FinanceLiableinit();
    this.bindCountCard1DataModel();
    this.bindCountCard1ConfigModel();
    this.bindCountCard2DataModel();
    this.bindCountCard2ConfigModel();
    this.bindCountCard3DataModel();
    this.bindCountCard3ConfigModel();
    this.bindCountCard4DataModel();
    this.bindCountCard4ConfigModel();
    this.bindCountCard5DataModel();
    this.bindCountCard5ConfigModel();
    this.getmatrixdata();
  }

  getstapperdata() {
    this.StepperDataModel.StepperfilterModel = [
      {
        code: "TASK001",
        color: "#009AD9",
        count: 32,
        countpercentage: "19.5122",
        countvisible: "0",
        display: "0",
        displayheadericon: "false",
        iconname: "done",
        name: "Advance Application",
        producttypename: "Adhoc Quotation",
        tasktypesequence: 1,
        tasktypeuid: 9050000000
      },
      {
        code: "TASK002",
        color: "#009AD9",
        count: 66,
        countpercentage: "40.2439",
        countvisible: "1",
        display: "0",
        displayheadericon: "false",
        iconname: "done_all",
        name: "Permit Requested",
        producttypename: "Adhoc Quotation",
        tasktypesequence: 2,
        tasktypeuid: 9050000001
      },
      {
        code: "TASK019",
        color: "#06B900",
        count: 9,
        countpercentage: "5.4878",
        countvisible: "1",
        display: "0",
        displayheadericon: "false",
        iconname: "color_lens",
        name: "Deemed Granted",
        producttypename: "Adhoc Quotation",
        tasktypesequence: 3,
        tasktypeuid: 9050000002
      },
      {
        code: "TASK019",
        color: "#06B900",
        count: 30,
        countpercentage: "18.2927",
        countvisible: "1",
        display: "0",
        displayheadericon: "false",
        iconname: "assignment",
        name: "Permit Granted",
        producttypename: "Adhoc Quotation",
        tasktypesequence: 4,
        tasktypeuid: 9050000018
      },
      {
        code: "TASK004",
        color: "#FF4500",
        count: 16,
        countpercentage: "9.7561",
        countvisible: "1",
        display: "0",
        displayheadericon: "false",
        iconname: "assignment",
        name: "Work Planned",
        producttypename: "Adhoc Quotation",
        tasktypesequence: 5,
        tasktypeuid: 9050000003
      },
      {
        code: "TASK005",
        color: "#FF4500",
        count: 27,
        countpercentage: "16.4634",
        countvisible: "1",
        display: "0",
        displayheadericon: "false",
        iconname: "assignment_turned_in",
        name: "Working In Progress",
        producttypename: "Adhoc Quotation",
        tasktypesequence: 6,
        tasktypeuid: 9050000004
      },
      {
        code: "TASK006",
        color: "#06B900",
        count: 16,
        countpercentage: "9.7561",
        countvisible: "1",
        display: "0",
        displayheadericon: "false",
        iconname: "attach_money",
        name: "Work Completed",
        producttypename: "Adhoc Quotation",
        tasktypesequence: 7,
        tasktypeuid: 9050000005
      },
      {
        code: "TASK007",
        color: "#009AD9",
        count: 1733,
        countpercentage: "1056.7073",
        countvisible: "1",
        display: "0",
        displayheadericon: "false",
        iconname: "description",
        name: "Permit Registered Today",
        producttypename: "Adhoc Quotation",
        tasktypesequence: 8,
        tasktypeuid: 9050000006
      }
    ]
  };

  getDueListData() {
    this.DueListDataModel1.Duelable = "DUE TODAY"
    this.DueListDataModel2.Duelable = "DUE THIS WEEK"
    this.DueListDataModel1.DuelistModel = [
      {
        label: "Start",
        count: 1,
        MemberUID: 0,
        Code: "start",
        OrderNo: 1
      },
      {
        label: "Stop",
        count: 0,
        MemberUID: 0,
        Code: "stop",
        OrderNo: 2
      },
      {
        label: "Register",
        count: 0,
        MemberUID: 1140300086,
        Code: "register",
        OrderNo: 3
      },
      {
        label: "Defect",
        count: 0,
        MemberUID: 1140300086,
        Code: "defect",
        OrderNo: 4
      },
      {
        label: "Comment",
        count: 0,
        MemberUID: 1140300086,
        Code: "comment",
        OrderNo: 5
      }
    ];

    this.DueListDataModel2.DuelistModel = [
      {
        label: "Start",
        count: 9,
        MemberUID: 0,
        Code: "start",
        OrderNo: 1
      },
      {
        label: "Stop",
        count: 5,
        MemberUID: 0,
        Code: "stop",
        OrderNo: 2
      },
      {
        label: "Register",
        count: 0,
        MemberUID: 1140300086,
        Code: "register",
        OrderNo: 3
      },
      {
        label: "Defect",
        count: 5,
        MemberUID: 1140300086,
        Code: "defect",
        OrderNo: 4
      },
      {
        label: "Comment",
        count: 0,
        MemberUID: 1140300086,
        Code: "comment",
        OrderNo: 5
      }
    ];

  };

  FinanceLiableinit() {
    this.FinanceLiableDataModel1.liabalitylable = "TODAY";
    this.FinanceLiableDataModel2.liabalitylable = "THIS WEEK";
    this.FinanceLiableDataModel1.listModel = [
      {
        potentiallabel1: "Potential abandanments",
        potentiallabel2: "Potential $74",
        potentialicon: "meeting_room",
        variationslable1: "Variations",
        variationslable2: "FPNs",
        variationsiconcolor: "orange",
        potentialliabality1: "2,000",
        potentialliabality2: "2,000",
        variationsliabality1: "3,000",
        variationsliabality2: "2,000",
        cardcolor: "#009AD9"
      }
    ];
    this.FinanceLiableDataModel2.listModel = [
      {
        potentiallabel1: "Potential abandanments",
        potentiallabel2: "Potential $74",
        potentialicon: "meeting_room",
        variationslable1: "Variations",
        variationslable2: "FPNs",
        variationsiconcolor: "orange",
        potentialliabality1: "2,000",
        potentialliabality2: "2,000",
        variationsliabality1: "3,000",
        variationsliabality2: "2,000",
        cardcolor: "#009AD9"
      }
    ];

  }

  bindCountCard1DataModel() {
    this.countCard1DataModel.data = {
      isIconEnable: false,
      isMatIcon: true,
      icon: 'mark_email_read',
      iconColor: '--theme-color',
      isTextEnable: true,
      text: 'Awaiting Grant',
      textColor: '--theme-color',
      isCountEnable: true,
      isCountUnderlineEnable: true,
      count: '21',
      countColor: '--theme-color',
      backgroundColor: null,
      isLeftStripEnable: true,
      leftStripColor: '--theme-color'
    }
  }
  bindCountCard1ConfigModel() {
  }

  bindCountCard2DataModel() {
    this.countCard2DataModel.data = {
      isIconEnable: false,
      isMatIcon: true,
      icon: 'check_circle',
      iconColor: '--count-card2-color',
      isTextEnable: true,
      text: 'Awaiting Start',
      textColor: '--count-card2-color',
      isCountEnable: true,
      isCountUnderlineEnable: true,
      count: '1',
      countColor: '--count-card2-color',
      backgroundColor: null,
      isLeftStripEnable: true,
      leftStripColor: '--count-card2-color'
    }
  }
  bindCountCard2ConfigModel() {
  }

  bindCountCard3DataModel() {
    this.countCard3DataModel.data = {
      isIconEnable: false,
      isMatIcon: true,
      icon: 'sync_alt',
      iconColor: '--count-card1-color',
      isTextEnable: true,
      text: 'In progress',
      textColor: '--count-card1-color',
      isCountEnable: true,
      isCountUnderlineEnable: true,
      count: '191',
      countColor: '--count-card1-color',
      backgroundColor: null,
      isLeftStripEnable: true,
      leftStripColor: '--count-card1-color'
    }
  }
  bindCountCard3ConfigModel() {
  }

  bindCountCard4DataModel() {
    this.countCard4DataModel.data = {
      isIconEnable: false,
      isMatIcon: true,
      icon: 'done_all',
      iconColor: '--count-card2-color',
      isTextEnable: true,
      text: 'Awaiting Stop',
      textColor: '--count-card2-color',
      isCountEnable: true,
      isCountUnderlineEnable: true,
      count: '0',
      countColor: '--count-card2-color',
      backgroundColor: null,
      isLeftStripEnable: true,
      leftStripColor: '--count-card2-color'
    }
  }
  bindCountCard4ConfigModel() {
  }

  bindCountCard5DataModel() {
    this.countCard5DataModel.data = {
      isIconEnable: false,
      isMatIcon: true,
      icon: 'done_all',
      iconColor: '--count-card2-color',
      isTextEnable: true,
      text: 'Awating Registration',
      textColor: '--count-card2-color',
      isCountEnable: true,
      isCountUnderlineEnable: true,
      count: '0',
      countColor: '--count-card2-color',
      backgroundColor: null,
      isLeftStripEnable: true,
      leftStripColor: '--count-card2-color'
    }
  }
  bindCountCard5ConfigModel() {
  }

  getmatrixdata() {
    this.MatrixModel.tableRowHeadingLeft = "10%";
    this.MatrixModel.tableRowHeadingRight = "23%";
    this.MatrixModel.tableTdHeight = "138px";
    this.MatrixModel.apiDataUrl = "/v1/widget/getwidgetdata";
    this.MatrixModel.showProgressBar = true;
    this.MatrixModel.templateid = "Template1";
    this.MatrixModel.showArrowIcon = true;
    this.MatrixModel.columnLength = 4;
    this.MatrixModel.rowLength = 3;
    this.MatrixModel.headers = [
      {
        headerText: "With Back Office",
        headerValue: "With Back Office"
      },
      {
        headerText: "With Highway Authority",
        headerValue: "With Highway Authority"
      },
      {
        headerText: "With Operation",
        headerValue: "With Operation"
      }
    ];
    this.MatrixModel.rowHeaders = [
      {
        rowText: "Overdue",
        displayRowHeaderText: "Overdue",
        rowIcon: "fa fa-exclamation-triangle",
        rowIconColor: "#662F8E"
      },
      {
        rowText: "Approaching Jeopardy",
        displayRowHeaderText: "Approaching Jeopardy",
        rowIcon: "fa fa-exclamation-triangle",
        rowIconColor: "#FF0000"
      },
      {
        rowText: "Meeting Expectations",
        displayRowHeaderText: "Meeting Expectations",
        rowIcon: "fa fa-exclamation-triangle",
        rowIconColor: "#FFC300"
      }
    ];
    this.MatrixModel.items = [
      [
        {
          displayText: 25,
          percentage: 13,
          bottonText: 0,
          text1: "",
          text2: "",
          iconname: "",
          iconcolor: "",
          rowArrowIcon: "",
          rowArrowColor: "",
          bottomCenterText: ""
        }
      ],
      [
        {
          displayText: 74,
          percentage: 38,
          bottonText: 0,
          text1: "",
          text2: "",
          iconname: "",
          iconcolor: "",
          rowArrowIcon: "",
          rowArrowColor: "",
          bottomCenterText: ""
        }
      ],
      [
        {
          displayText: 29,
          percentage: 15,
          bottonText: 0,
          text1: "",
          text2: "",
          iconname: "",
          iconcolor: "",
          rowArrowIcon: "",
          rowArrowColor: "",
          bottomCenterText: ""
        }
      ]
    ];

  }

}
