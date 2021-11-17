import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-vertical-donut-chart',
  templateUrl: './vertical-donut-chart.component.html',
  styleUrls: ['./vertical-donut-chart.component.css']
})
export class VerticalDonutChartComponent implements OnInit {
  legends:any;
  Donutchart: any;
  @ViewChild('donutChart') public chartRef;
  @ViewChild('donutChartLegend') public legendRef;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {

    // Create our number formatter.
  var formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits:0
  });

    this.Donutchart = new Chart(this.chartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Immediate','Minor','Standard','Major'],
        datasets: [
          { 
            data: [30000,40000,70000,240000],
            backgroundColor: ['#378B12','#4DB91E','#5BD825','#A3EA84'],
            fill: false,
            borderWidth:2, 
            label : 'Sleep',
          },
          
        ]
      },
      options: {
        responsive:true,
       cutoutPercentage:75,
        legend: {
          display: false,
          position:'right',
          align: 'center',
          labels:{
            boxWidth:20,
            usePointStyle:true,
          }
        },
        legendCallback :function (chart){
          var text = [];
          for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
            text.push(`<div class="legend-item"><span class="legend-box" style="background:`
            +chart.data.datasets[0].backgroundColor[i]+
            `"></span><a href="#" data-id=''>`+chart.data.labels[i]+
            `</a><span class="legend-value">`
            +formatter.format(parseInt(chart.data.datasets[0].data[i].toString()))+
            `</span></div>`);

          }

            return text.join("");
        },
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
      
          var text = "£380,000",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = Math.round((height / 2) - 10) ;
  
          var text2 = "Application Costs",
              text2X = Math.round((width - ctx.measureText(text2).width) / 2),
              text2Y = Math.round((height / 2) + 10) ;
      
          ctx.fillText(text, textX, textY);
          ctx.fillText(text2, text2X, text2Y);
          ctx.save();
        }
      }]
    });
    this.legendRef.nativeElement.innerHTML = this.Donutchart.generateLegend();
    this.Donutchart.update();
    

  }
}
