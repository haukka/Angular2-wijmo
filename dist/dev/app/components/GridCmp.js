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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var DataSvc_1 = require('../services/DataSvc');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2Grid = require('wijmo/wijmo.angular2.grid');
var GridCmp = (function () {
    function GridCmp(dataSvc) {
        this.dataSvc = dataSvc;
        this.data = this.dataSvc.getData(100);
    }
    GridCmp.prototype.ngAfterViewInit = function () {
        this.flex.allowResizing = wijmo.grid.AllowResizing.Both;
    };
    __decorate([
        core_1.ViewChild('flex'), 
        __metadata('design:type', wijmo.grid.FlexGrid)
    ], GridCmp.prototype, "flex", void 0);
    GridCmp = __decorate([
        core_1.Component({
            selector: 'grid-cmp',
            templateUrl: 'src/components/gridCmp.html',
            directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate,
                wjNg2Input.WjInputDate, common_1.CORE_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc)), 
        __metadata('design:paramtypes', [DataSvc_1.DataSvc])
    ], GridCmp);
    return GridCmp;
}());
exports.GridCmp = GridCmp;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0dyaWRDbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBRWIscUJBQTRELGVBQWUsQ0FBQyxDQUFBO0FBQzVFLHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELHdCQUF3QixxQkFBcUIsQ0FBQyxDQUFBO0FBQzlDLElBQVksVUFBVSxXQUFNLDRCQUE0QixDQUFDLENBQUE7QUFDekQsSUFBWSxTQUFTLFdBQU0sMkJBQTJCLENBQUMsQ0FBQTtBQVV2RDtJQUtJLGlCQUE4QixPQUFnQjtRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxpQ0FBZSxHQUFmO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQzVELENBQUM7SUFWRDtRQUFDLGdCQUFTLENBQUMsTUFBTSxDQUFDO3dDQUFhLElBQUksQ0FBQyxRQUFRO3lDQUExQjtJQVZ0QjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxzQkFBc0I7Z0JBQzNGLFVBQVUsQ0FBQyxXQUFXLEVBQUUsd0JBQWUsQ0FBQztTQUMvQyxDQUFDO21CQU9nQixhQUFNLENBQUMsaUJBQU8sQ0FBQzs7ZUFQL0I7SUFnQkYsY0FBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksZUFBTyxVQWNuQixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL0dyaWRDbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERhdGFTdmMgfSBmcm9tICcuLi9zZXJ2aWNlcy9EYXRhU3ZjJztcclxuaW1wb3J0ICogYXMgd2pOZzJJbnB1dCBmcm9tICd3aWptby93aWptby5hbmd1bGFyMi5pbnB1dCc7XHJcbmltcG9ydCAqIGFzIHdqTmcyR3JpZCBmcm9tICd3aWptby93aWptby5hbmd1bGFyMi5ncmlkJztcclxuXHJcbi8vIEdyaWQgQ29tcG9uZW50XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncmlkLWNtcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NyYy9jb21wb25lbnRzL2dyaWRDbXAuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbd2pOZzJHcmlkLldqRmxleEdyaWQsIHdqTmcyR3JpZC5XakZsZXhHcmlkQ29sdW1uLCB3ak5nMkdyaWQuV2pGbGV4R3JpZENlbGxUZW1wbGF0ZSxcclxuICAgICAgICB3ak5nMklucHV0LldqSW5wdXREYXRlLCBDT1JFX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZENtcCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gICAgZGF0YTogYW55W107XHJcbiAgICBwcml2YXRlIGRhdGFTdmM6IERhdGFTdmM7XHJcbiAgICBAVmlld0NoaWxkKCdmbGV4JykgZmxleDogd2lqbW8uZ3JpZC5GbGV4R3JpZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggQEluamVjdChEYXRhU3ZjKSBkYXRhU3ZjOiBEYXRhU3ZjKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU3ZjID0gZGF0YVN2YztcclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGFTdmMuZ2V0RGF0YSgxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAvLyB1c2UgdGhlIOKAmGZsZXjigJkgcHJvcGVydHkgdG8gYWNjZXNzIEZsZXhHcmlkIGluc3RhbmNlIHByb3BlcnRpZXMsIG1ldGhvZHMgYW5kIGV2ZW50c1xyXG4gICAgICAgIHRoaXMuZmxleC5hbGxvd1Jlc2l6aW5nID0gd2lqbW8uZ3JpZC5BbGxvd1Jlc2l6aW5nLkJvdGg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=
