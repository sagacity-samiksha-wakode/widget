import { DatePipe } from '@angular/common';
import { Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as Chart from 'chart.js';
import { ServerApiInterfaceServiceService } from 'src/app/services/server-api-interface-service.service';
import { ValidationService } from 'src/app/services/validation.service';
import { WidgetComponentBase } from 'src/app/utility/widget/widget-utility/widget-component-base';
import { threadId } from 'worker_threads';
import { HorizontalDonutChartConfigModel, HorizontalDonutChartDataModel } from './horizontal-donut-chart.model';

@Component({
  selector: 'app-horizontal-donut-chart',
  templateUrl: './horizontal-donut-chart.component.html',
  styleUrls: ['./horizontal-donut-chart.component.css']
})
export class HorizontalDonutChartComponent extends WidgetComponentBase implements OnInit {
  
  legends:any;
  hDonutchart: any;
  @ViewChild('donutChart') public chartRef;
  @ViewChild('donutChartLegend') public legendRef;

  @Input()  dataModel!: HorizontalDonutChartDataModel;
  @Input() configModel!: HorizontalDonutChartConfigModel;
  
  // Create our number formatter.
  formatter : any;

  constructor(
    private _formBuilder: FormBuilder,
    // private _serverApiBase: ServerApiInterfaceServiceService,
    private _serverApiBase: ServerApiInterfaceServiceService,
    private _datepipe: DatePipe,
    public _validationService: ValidationService,
    private ngZone: NgZone
  ) {
    super(_serverApiBase, _validationService);

   
    //window["onLegendClick1"] = this.onLegendClick1
  }

  ngOnInit(): void {

    this.formatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits:0 });

     super.wgOnInit();
     window['HorizontalDonutChartComponent'] = { component: this, zone: this.ngZone, onLegendClick: (data) => this.onLegendClick(data), };  

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

  ngAfterViewInit() {

    this.hDonutchart = new Chart(this.chartRef.nativeElement, {
      type: 'doughnut',
      data: this.dataModel.data,
      options: {
        responsive:true,
       cutoutPercentage:75,
        legend: {
          display: false,
        },        
        legendCallback : this.attachLegend,
        tooltips:{
          enabled:true
        }
      },
      plugins:[{
        beforeDraw: function(chart) {
          var width = chart.width,
              height = chart.height,
              ctx = chart.ctx;
          ctx.restore();
          var fontSize = (height / 200).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
      
          var text = "£1.21M",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = Math.round((height / 2) - 10) ;
  
          var text2 = "Other Costs",
              text2X = Math.round((width - ctx.measureText(text2).width) / 2),
              text2Y = Math.round((height / 2) + 10) ;
      
          ctx.fillText(text, textX, textY);
          ctx.fillText(text2, text2X, text2Y);
          ctx.save();
        }
      }]
    });

    this.legendRef.nativeElement.innerHTML = this.hDonutchart.generateLegend();
  }

  attachLegend(chart:Chart){
    var text = [];
    console.log("on legend clicked")

    this.formatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits:0 });

     for (var i = 0; i < chart.data.datasets[0].data.length; i++) {

        var legendText =chart.data.labels[i];
        var notoformat = chart.data.datasets[0].data[i].toString()        
        var formattedNo = this.formatter.format(parseInt(notoformat));
        
        console.log('formated no is ', formattedNo)
       
        text.push(`<div class="legend-item"><span class="legend-box" style="background:`
         +chart.data.datasets[0].backgroundColor[i]+
         `"></span><a href="javascript:;" onclick="window.HorizontalDonutChartComponent.onLegendClick('`+legendText+`');" data-id=''>`+chart.data.labels[i]+
         `</a><span class="legend-value">`+
        //  this.formatter.format(parseInt(chart.data.datasets[0].data[i].toString()))+
         `</span></div>`);
       }
        
    return text.join("");
  }

  onLegendClick(data){    
      this.configModel.CompToCaller.emit(HorizontalDonutChartConfigModel.ON_LEGEND_CLICKED, data);    
  }

}
