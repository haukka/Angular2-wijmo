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
var wjNg2Input = require('wijmo/wijmo.angular2.input');
// FormCmp Component.
var FormCmp = (function () {
    function FormCmp(dataSvc) {
        this.dataSvc = dataSvc;
        this.productSales = this.dataSvc.getSales();
    }
    FormCmp = __decorate([
        core_1.Component({
            selector: 'formCmp-cmp',
            templateUrl: 'src/components/formCmp.html',
            directives: [wjNg2Gauge.WjBulletGraph, wjNg2Gauge.WjLinearGauge, wjNg2Gauge.WjRadialGauge, wjNg2Input.WjInputDate, wjNg2Input.WjInputNumber, wjNg2Input.WjInputTime]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], FormCmp);
    return FormCmp;
})();
exports.FormCmp = FormCmp;
//# sourceMappingURL=FormCmp.js.map