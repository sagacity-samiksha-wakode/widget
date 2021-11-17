import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-avoidable-cost-card',
  templateUrl: './avoidable-cost-card.component.html',
  styleUrls: ['./avoidable-cost-card.component.css']
})
export class AvoidableCostCardComponent implements OnInit {
  comboChart: any;
  @ViewChild('comboChart') public chartRef;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
      const labels = ["Jul 2020", "Aug 2020", "Sep 2020", "Oct 2020", "Nov 2020", "Dec 2020", "Jan 2021", "Feb 2021", "Mar 2021", "Apr 2021", "May 2021", "Jun 2021"];
      var getRandomValues = function() {
          var array = [];
          for (var i = 0; i < labels.length; i++) {
              var a = Math.round(Math.random() * 1500);
              array.push(a);
          }
          return array;
      };

      this.comboChart = new Chart(this.chartRef.nativeElement, {
          type: 'bar',
          data: {
              labels: labels,
              datasets: [{
                      data: getRandomValues(),
                      borderColor: '#C71818',
                      yAxisID: "y-axis-2",
                      label: 'Total Avoidable Costs (Jul 2019-June 2020)',
                      type: 'line',
                      fill: false,
                      lineTension: 0,
                      borderDash: [2],
                      borderDashOffset:10,
                      pointStyle: 'line'
                  },
                  {
                      data: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000],
                      borderColor: '#378B12',
                      yAxisID: "y-axis-2",
                      label: 'Average Avoidable Costs (Jul 2020-Jun 2021)',
                      type: 'line',
                      fill: false,
                      lineTension: 0,
                      pointStyle: 'line'
                  },
                  {
                      data: getRandomValues(),
                      backgroundColor: '#A6CEE3',
                      yAxisID: "y-axis-1",
                      label: 'Abandoned Jobs',
                  },
                  {
                      data: getRandomValues(),
                      backgroundColor: '#1F78B4',
                      yAxisID: "y-axis-1",
                      label: 'Mis-spend',
                  },
                  {
                    data: getRandomValues(),
                    backgroundColor: '#FFC321',
                    yAxisID: "y-axis-1",
                    label: 'Variations',
                },{
                  data: getRandomValues(),
                  backgroundColor: '#AA619F',
                  yAxisID: "y-axis-1",
                  label: 'FPN Paid Cost',
              },{
                data: getRandomValues(),
                backgroundColor: '#2B8DFF',
                yAxisID: "y-axis-1",
                label: 'Defects Paid Cost',
            },{
              data: getRandomValues(),
              backgroundColor: '#FB9A99',
              yAxisID: "y-axis-1",
              label: 'Overruns (S74) Paid Costs',
          },


              ]
          },
          options: {
              responsive: true,
              legend: {
                  display: true,
                  position:'bottom'
              },
              tooltips: {
                  enabled: true,
                  mode: 'index',
                  intersect: true
              },
              scales: {
                  xAxes: [{
                      stacked: true
                  }],
                  yAxes: [{
                      type: "linear", 
                      stacked: true,
                      display: true,
                      position: "left",
                      id: "y-axis-1",
                      ticks: {
                          beginAtZero: true,
                          suggestedMin: 0,
                          suggestedMax: 10000,
                          min: 0,callback: function(value, index, values) {
                            if(value >= 1000){
                              return '£' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            } else {
                              return '£' + value;
                            }
                          }
                      }
                  }, {
                      type: "linear", 
                      display: false,
                      id: "y-axis-2",
                      ticks: {
                          beginAtZero: true,
                          suggestedMin: 0,
                          suggestedMax: 10000,
                          min: 0
                      }
                  }],
              }
          },

      });
  }
}