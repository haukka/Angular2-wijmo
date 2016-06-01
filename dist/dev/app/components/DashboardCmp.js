'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var DataSvc_1 = require('../services/DataSvc');
var wjNg2Gauge = require('wijmo/wijmo.angular2.gauge');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
// DashboardCmp Component.
var DashboardCmp = (function () {
    function DashboardCmp(dataSvc) {
        this.dataSvc = dataSvc;
        this.productSales = this.dataSvc.getSales();
    }
    DashboardCmp = __decorate([
        core_1.Component({
            selector: 'dashboardCmp-cmp',
            templateUrl: 'src/components/dashboardCmp.html',
            directives: [wjNg2Gauge.WjBulletGraph, wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartLegend]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], DashboardCmp);
    return DashboardCmp;
})();
exports.DashboardCmp = DashboardCmp;
//# sourceMappingURL=DashboardCmp.js.map