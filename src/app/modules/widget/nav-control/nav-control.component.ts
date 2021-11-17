import { Component, OnInit } from '@angular/core';

import { NavControlModel } from './nav-control.model';
import { Router } from '@angular/router';
import { ServerApiInterfaceServiceService } from 'src/app/services/server-api-interface-service.service';
import { ValidationService } from 'src/app/services/validation.service';
import { WidgetComponentBase } from 'src/app/utility/widget/widget-utility/widget-component-base';

@Component({
  selector: 'app-nav-control',
  templateUrl: './nav-control.component.html',
  styleUrls: ['./nav-control.component.css']
})
export class NavControlComponent extends WidgetComponentBase implements OnInit {
  navTitlesData: NavControlModel[] = [];

  constructor(
    private _serverApiBase: ServerApiInterfaceServiceService,
    private _validationService: ValidationService,
    private router: Router
  ) {
    super(_serverApiBase, _validationService);
   }

  ngOnInit(): void {
    // this.wgOnInit();
    this.getNavigationData();
  }

  setFieldData() {
  }

  getControlData() {
  }

  convertData(response: any) {
  }

  setMode(responseDataModel: any) {
  }

  setValue(responseDataModel: any) {
  }

  getNavigationData(){
    this.navTitlesData = [
      {
        titleIconName:'dashboard',
        titleIconColor:'',
        showTitleIcon:'true',
        title:'Dashboard',
        subNavControls:[
          {
            subTitle:'Management Overview',
            subTitleIconName: '',
            showSubTitleIcon:'',
            subTitleIconColor: '',
            navigationRout:'/admin/management-overview'
          },
          {
            subTitle:'Permit Costs',
            subTitleIconName: '',
            showSubTitleIcon:'',
            subTitleIconColor: '',
            navigationRout:'/admin/permit-costs'
          },
          {
            subTitle:'Fixed Penalty Notices',
            subTitleIconName: '',
            showSubTitleIcon:'',
            subTitleIconColor: '',
            navigationRout:'/admin/fixed-penalty-notices'
          }
        ]
      },
      {
        titleIconName:'assignment_turned_in',
        titleIconColor:'',
        showTitleIcon:'true',
        title:'Permit Display',
        subNavControls:[
          {
            subTitle:'Permit List',
            subTitleIconName: '',
            showSubTitleIcon:'',
            subTitleIconColor: '',
            navigationRout:''
          },
          {
            subTitle:'Duration Viewer',
            subTitleIconName: '',
            showSubTitleIcon:'',
            subTitleIconColor: '',
            navigationRout:''
          }
        ]
      },
    ];
  }

  redirectToPage(navigationRout){
    if(navigationRout){
      this.router.navigate([navigationRout]);
    }
  }

}
