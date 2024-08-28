import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-secondpie-chart',
  templateUrl: './secondpie-chart.component.html',
  styleUrls: ['./secondpie-chart.component.css']
})
export class SecondpieChartComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {
    this.chart3()
  }

  chart3(){
    let chartOptions3 = {
      series: [44, 55, 41, 17, 15],
      chart: {
        width: 380,
        type: "donut",
        dropShadow: {
          enabled: true,
          color: "#111",
          top: -1,
          left: 3,
          blur: 3,
          opacity: 0.2
        }
      },
      stroke: {
        width: 0
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true
              }
            }
          }
        }
      },
      labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
      dataLabels: {
        dropShadow: {
          blur: 3,
          opacity: 0.8
        }
      },
      fill: {
        type: "pattern",
        opacity: 1,
        pattern: {
          enabled: true,
          style: [
            "verticalLines",
            "squares",
            "horizontalLines",
            "circles",
            "slantedLines"
          ]
        }
      },
      states: {
        hover: {
          filter: {
            type: "none"
          }
        }
      },
      theme: {
        palette: "palette2"
      },
      title: {
        text: ""
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    let  chart001 = new ApexCharts(document.querySelector('#chart03'),chartOptions3);
    chart001.render()
 
 
  }

}
