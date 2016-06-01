"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var DataSvc_1 = require('../services/DataSvc');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
var AboutComponent = (function () {
    function AboutComponent(dataSvc) {
        this.dataSvc = dataSvc;
        this.productSales = this.dataSvc.getSales();
    }
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-about',
            templateUrl: 'about.component.html',
            styleUrls: ['about.component.css'],
            directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartLegend]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc)), 
        __metadata('design:paramtypes', [DataSvc_1.DataSvc])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWJvdXQvYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsd0JBQXdCLHFCQUFxQixDQUFDLENBQUE7QUFDOUMsSUFBWSxVQUFVLFdBQU0sNEJBQTRCLENBQUMsQ0FBQTtBQVd6RDtJQUlJLHdCQUE4QixPQUFnQjtRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQWRMO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2xDLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztTQUNqRyxDQUFDO21CQUtnQixhQUFNLENBQUMsaUJBQU8sQ0FBQzs7c0JBTC9CO0lBU0YscUJBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLHNCQUFjLGlCQVExQixDQUFBIiwiZmlsZSI6ImFwcC8rYWJvdXQvYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0YVN2YyB9IGZyb20gJy4uL3NlcnZpY2VzL0RhdGFTdmMnO1xuaW1wb3J0ICogYXMgd2pOZzJDaGFydCBmcm9tICd3aWptby93aWptby5hbmd1bGFyMi5jaGFydCc7XG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgQWJvdXRDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWFib3V0JyxcbiAgdGVtcGxhdGVVcmw6ICdhYm91dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhYm91dC5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFt3ak5nMkNoYXJ0LldqRmxleENoYXJ0LCB3ak5nMkNoYXJ0LldqRmxleENoYXJ0U2VyaWVzLCB3ak5nMkNoYXJ0LldqRmxleENoYXJ0TGVnZW5kXVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7XG4gICAgcHJvZHVjdFNhbGVzOiBhbnlbXTtcbiAgICBwcml2YXRlIGRhdGFTdmM6IERhdGFTdmM7XG5cbiAgICBjb25zdHJ1Y3RvciggQEluamVjdChEYXRhU3ZjKSBkYXRhU3ZjOiBEYXRhU3ZjKSB7XG4gICAgICAgIHRoaXMuZGF0YVN2YyA9IGRhdGFTdmM7XG4gICAgICAgIHRoaXMucHJvZHVjdFNhbGVzID0gdGhpcy5kYXRhU3ZjLmdldFNhbGVzKCk7XG4gICAgfVxufVxuIl19
