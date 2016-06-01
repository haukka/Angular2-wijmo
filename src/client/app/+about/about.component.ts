import { Component, Inject } from '@angular/core';

import { DataSvc } from '../services/DataSvc';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartLegend]
})
export class AboutComponent {
    productSales: any[];
    private dataSvc: DataSvc;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.dataSvc = dataSvc;
        this.productSales = this.dataSvc.getSales();
    }
}
