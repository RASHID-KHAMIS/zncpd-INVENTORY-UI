import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-third-pie-chart',
  templateUrl: './third-pie-chart.component.html',
  styleUrls: ['./third-pie-chart.component.css']
})
export class ThirdPieChartComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {
  this.chart2();
  }

  chart2(){
    let chartOptions2 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
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
    let  chart001 = new ApexCharts(document.querySelector('#chart04'),chartOptions2);

    chart001.render()
 
 
  
  }

}
