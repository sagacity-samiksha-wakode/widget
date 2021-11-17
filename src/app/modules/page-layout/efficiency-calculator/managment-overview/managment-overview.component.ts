import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { PerformanceIndicatorCardConfigModel, PerformanceIndicatorCardDataModel } from 'src/app/modules/widget-app/performance-indicators-card/performance-indicator-card-model';

import { AppRepoHelperService } from 'src/app/services/app-repo-helper.service';
import { EventActionService } from 'src/app/services/event-action.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from 'src/app/services/notification.service';
import { ServerApiInterfaceServiceService } from 'src/app/services/server-api-interface-service.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { WidgetPageBase } from 'src/app/utility/widget/widget-utility/widget-page-base';

@Component({
  selector: 'app-managment-overview',
  templateUrl: './managment-overview.component.html',
  styleUrls: ['./managment-overview.component.css']
})
export class ManagmentOverviewComponent extends WidgetPageBase
implements OnInit, AfterViewInit, OnDestroy {


  performanceIndicatorCardDataModel?: PerformanceIndicatorCardDataModel;
  performanceIndicatorCardConfigModel?: PerformanceIndicatorCardConfigModel;

  constructor(
    private _serverApi: ServerApiInterfaceServiceService,
    private _sessionStorageService: SessionStorageService,
    private _eventActionService: EventActionService,
    private _router: Router,
    private route: ActivatedRoute,
    private _spinner: NgxSpinnerService,
    // private _saveFileService: SaveFileService,
    private _notificationService: NotificationService,
    private _appRepoHelperService: AppRepoHelperService
  ) {
    super(
      _serverApi,
      _eventActionService,
      _sessionStorageService,
      _router,
      _spinner
    );

    this.pageReq = { page: 'dashboard' };
    this.pageprop = Object();
    this.pageInstance = this;


    this.performanceIndicatorCardDataModel= PerformanceIndicatorCardDataModel.getInstance();
    this.performanceIndicatorCardConfigModel= PerformanceIndicatorCardConfigModel.getInstance();


  }

  ngOnInit(): void {

    this.bindPerformanceIndicatorCardDataModel();

  }

  bindPerformanceIndicatorCardDataModel(){
    this.performanceIndicatorCardDataModel.data=[{
      text:"Permits With Avoidable Costs",
      count:"25%",
      countColor:"#000",
      value:25,
      valuecolor:"#DB0000",
    },
    {
      text:"Start-Stop Compliance",
      count:"30%",
      countColor:"#000",
      value:30,
      valuecolor:"#FFB100",
    },
    {
      text:"Defects to Inspections",
      count:"70%",
      countColor:"#000",
      value:70,
      valuecolor:"#DB0000",
    },
    {
      text:"Right-First-Time Permits",
      count:"80%",
      countColor:"#000",
      value:80,
      valuecolor:"#DB0000",
    },
    {
      text:"Registrations Completed on Time",
      count:"86%",
      countColor:"#000",
      value:86,
      valuecolor:"#378B12",
    },
    ]
  }



  ngAfterViewInit(): void {
    super.initBase();
  }

  ngOnDestroy(): void {
    super.removeListeners();
  }

}
