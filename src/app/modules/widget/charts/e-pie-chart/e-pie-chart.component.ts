import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-e-pie-chart',
  templateUrl: './e-pie-chart.component.html',
  styleUrls: ['./e-pie-chart.component.css']
})
export class EPieChartComponent implements OnInit {
  legends:any;
  pieChart: any;
  @ViewChild('pieChart') public chartRef;
  @ViewChild('pieChartLegend') public legendRef;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    // Create our number formatter.
  var formatter = new Intl.NumberFormat('en-GB', {
 // style: 'currency',
 // currency: 'GBP',
 // maximumFractionDigits:0
  });

this.pieChart = new Chart(this.chartRef.nativeElement, {
  type: 'pie',
  data: {
    labels: ['Incorrect Details Submitted','Late Registration Submitted','Late Works Start / Work Stop','Working Without Permit','Breach of Permit Conditions'],
    datasets: [
      { 
        data: [12,24,25,22,12],
        backgroundColor: ['#3E6FB6','#6296E2','#7BB1FC','#7BB1FC','#7BB1FC'],
        fill: true,
        borderWidth:2, 
      },
      
    ]
  },
  options: {
    responsive:true,
    legend: {
      display: false,
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
});

this.legendRef.nativeElement.innerHTML = this.pieChart.generateLegend();


}
}
