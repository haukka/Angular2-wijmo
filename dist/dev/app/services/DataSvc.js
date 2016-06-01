'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DataSvc = (function () {
    function DataSvc() {
    }
    DataSvc.prototype.getData = function (count) {
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','), data;
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
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataSvc);
    return DataSvc;
}());
exports.DataSvc = DataSvc;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9EYXRhU3ZjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUViLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUkzQztJQUFBO0lBK0JBLENBQUM7SUE1QlUseUJBQU8sR0FBZCxVQUFlLEtBQWE7UUFDeEIsSUFBSSxTQUFTLEdBQUcsa0NBQWtDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUN6RCxJQUFXLENBQUM7UUFDaEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNOLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBQ3hDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNwQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUs7Z0JBQzdCLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7YUFDckIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDBCQUFRLEdBQWY7UUFDSSxJQUFJLFlBQVksR0FBRztZQUNmLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUM5RCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDMUQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQzlELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztZQUM1RCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDNUQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQzNELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUNyRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7U0FDN0QsQ0FBQztRQUNGLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQS9CTDtRQUFDLGlCQUFVLEVBQUU7O2VBQUE7SUFnQ2IsY0FBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUEvQlksZUFBTyxVQStCbkIsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvRGF0YVN2Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIENvbW1vbiBkYXRhIHNlcnZpY2VcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVN2YyB7XHJcblxyXG4gICAgLy8gZ2V0IGRhdGEgZm9yIGdyaWRcclxuICAgIHB1YmxpYyBnZXREYXRhKGNvdW50OiBudW1iZXIpOiBhbnlbXSB7XHJcbiAgICAgICAgdmFyIGNvdW50cmllcyA9ICdVUyxHZXJtYW55LFVLLEphcGFuLEl0YWx5LEdyZWVjZScuc3BsaXQoJywnKSxcclxuICAgICAgICAgICAgZGF0YTogYW55W107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6IGNvdW50cmllc1tpICUgY291bnRyaWVzLmxlbmd0aF0sXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgyMDE0LCBpICUgMTIsIGkgJSAyOCksXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IE1hdGgucmFuZG9tKCkgKiAxMDAwMCxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogaSAlIDQgPT0gMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgc2FsZXMgXHJcbiAgICBwdWJsaWMgZ2V0U2FsZXMoKTogYW55W10ge1xyXG4gICAgICAgIHZhciBwcm9kdWN0U2FsZXMgPSBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ1RlbGV2aXNpb25zJywgdW5pdHM6ICdNJywgY3VycmVudDogOC4zLCB0YXJnZXQ6IDcuNSB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdDb21wdXRlcnMnLCB1bml0czogJ00nLCBjdXJyZW50OiA4LjEsIHRhcmdldDogOCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdWaWRlbyBHYW1lcycsIHVuaXRzOiAnTScsIGN1cnJlbnQ6IDguMSwgdGFyZ2V0OiA3LjUgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAnSG9tZSBBdWRpbycsIHVuaXRzOiAnTScsIGN1cnJlbnQ6IDYuOCwgdGFyZ2V0OiA2LjV9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdDYXIgQXVkaW8nLCB1bml0czogJ00nLCBjdXJyZW50OiA2LjQsIHRhcmdldDogNi41IH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ0FwcGxpYW5jZXMnLCB1bml0czogJ00nLCBjdXJyZW50OiA0LjEsIHRhcmdldDogNCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdEVkRzJywgdW5pdHM6ICdNJywgY3VycmVudDogMy4xLCB0YXJnZXQ6IDQgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAnRnVybml0dXJlJywgdW5pdHM6ICdNJywgY3VycmVudDogMi4zLCB0YXJnZXQ6IDIgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RTYWxlcztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0=
