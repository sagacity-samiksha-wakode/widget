import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-mixed-column-line-chart',
  templateUrl: './mixed-column-line-chart.component.html',
  styleUrls: ['./mixed-column-line-chart.component.css']
})
export class MixedColumnLineChartComponent implements OnInit {
  comboChart: any;
  @ViewChild('comboChart') public chartRef;
  constructor() { }

  ngOnInit(): void {
  }
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
            datasets: [

                {
                    data: getRandomValues(),
                    backgroundColor: '#A6CEE3',
                    yAxisID: "y-axis-1",
                    label: 'Previous Period',
                },
                {
                    data: getRandomValues(),
                    backgroundColor: '#1F78B4',
                    yAxisID: "y-axis-1",
                    label: 'Current Period',
                },                {
                  data: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000],
                  borderColor: '#378B12',
                  yAxisID: "y-axis-2",
                  label: 'Current Period Avg',
                  type: 'line',
                  fill: false,
                  lineTension: 0,
                  pointStyle: 'line'
              },
              {
                data: [4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000],
                borderColor: '#C71818',
                yAxisID: "y-axis-2",
                label: 'Previous Period Avg',
                type: 'line',
                fill: false,
                lineTension: 0,
                borderDash: [2],
                borderDashOffset:10,
                pointStyle: 'line'
            },
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio:false,
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
                    stacked: false
                }],
                yAxes: [{
                    type: "linear", 
                    stacked: false,
                    display: true,
                    position: "left",
                    id: "y-axis-1",
                    ticks: {
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: 6000,
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
                        suggestedMax: 6000,
                        min: 0
                    }
                }],
            }
        },

    });
}
}
