import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { SalaryAtMoment } from '../../interfaces/worker.interface';

@Component({
  selector: 'worker-salary-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphComponent implements OnInit{
  @Input() public myData!: SalaryAtMoment[];


  public readonly title: string = 'ng2-charts-salary';

  public lineChartData!: ChartConfiguration<'line'>['data'];

  public readonly lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };

  public readonly lineChartLegend: boolean = true;

  public ngOnInit(): void {
    this.lineChartData = {
      labels: this.myData.map((item: SalaryAtMoment) => item.date),
      datasets: [
        {
          data: this.myData.map((item : SalaryAtMoment) => item.sum),
          label: 'Динамика зарплат',
          fill: true,
          tension: 0.2,
          borderColor: 'black',
          backgroundColor: 'rgba(0,0,0,0.16)'
        }
      ]
    };
  }
}
