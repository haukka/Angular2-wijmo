'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
// Common data service
var DataSvc = (function () {
    function DataSvc() {
    }
    // get data for grid
    DataSvc.prototype.getData = function (count) {
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','), data = [];
        for (var i = 0; i < count; i++) {
            data.push({
                id: i,
                country: countries[i % countries.length],
                date: new Date(2014, i % 12, i % 28),
                amount: Math.random() * 10000,
                active: i % 4 == 0
            });
        }
        return data;
    };
    // get sales 
    DataSvc.prototype.getSales = function () {
        var productSales = [
            { name: 'Televisions', units: 'M', current: 8.3, target: 7.5 },
            { name: 'Computers', units: 'M', current: 8.1, target: 8 },
            { name: 'Video Games', units: 'M', current: 8.1, target: 7.5 },
            { name: 'Home Audio', units: 'M', current: 6.8, target: 6.5 },
            { name: 'Car Audio', units: 'M', current: 6.4, target: 6.5 },
            { name: 'Appliances', units: 'M', current: 4.1, target: 4 },
            { name: 'DVDs', units: 'M', current: 3.1, target: 4 },
            { name: 'Furniture', units: 'M', current: 2.3, target: 2 }
        ];
        return productSales;
    };
    DataSvc = __decorate([
        core_1.Injectable()
    ], DataSvc);
    return DataSvc;
})();
exports.DataSvc = DataSvc;
//# sourceMappingURL=DataSvc.js.map