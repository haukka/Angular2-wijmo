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
var core_1 = require('@angular/core');
var DataSvc = (function () {
    function DataSvc() {
    }
    DataSvc.prototype.getData = function (countries) {
        var data;
        for (var i = 0; i < countries.length; i++) {
            data.push({
                country: countries,
                downloads: Math.round(Math.random() * 20000),
                sales: Math.random() * 10000,
                expenses: Math.random() * 5000
            });
        }
        return data;
    };
    DataSvc = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataSvc);
    return DataSvc;
}());
exports.DataSvc = DataSvc;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9EYXRhU3ZjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0M7SUFBQTtJQWFBLENBQUM7SUFaRyx5QkFBTyxHQUFQLFVBQVEsU0FBbUI7UUFDdkIsSUFBSSxJQUFXLENBQUM7UUFDaEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDTixPQUFPLEVBQUUsU0FBUztnQkFDbEIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztnQkFDNUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLO2dCQUM1QixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUk7YUFDakMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQWJMO1FBQUMsaUJBQVUsRUFBRTs7ZUFBQTtJQWNiLGNBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLGVBQU8sVUFhbkIsQ0FBQSIsImZpbGUiOiJhcHAvK2hvbWUvRGF0YVN2Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhU3ZjIHtcbiAgICBnZXREYXRhKGNvdW50cmllczogc3RyaW5nW10pOiBhbnlbXSB7XG4gICAgICAgIHZhciBkYXRhOiBhbnlbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgY291bnRyeTogY291bnRyaWVzLFxuICAgICAgICAgICAgICAgIGRvd25sb2FkczogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjAwMDApLFxuICAgICAgICAgICAgICAgIHNhbGVzOiBNYXRoLnJhbmRvbSgpICogMTAwMDAsXG4gICAgICAgICAgICAgICAgZXhwZW5zZXM6IE1hdGgucmFuZG9tKCkgKiA1MDAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59Il19
