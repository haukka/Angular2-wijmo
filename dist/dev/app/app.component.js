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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var index_1 = require('./+about/index');
var index_2 = require('./+home/index');
var index_3 = require('./shared/index');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            viewProviders: [index_3.NameListService, http_1.HTTP_PROVIDERS],
            templateUrl: 'app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, index_3.NavbarComponent, index_3.ToolbarComponent]
        }),
        router_1.Routes([
            {
                path: '/',
                component: index_2.HomeComponent
            },
            {
                path: '/about',
                component: index_1.AboutComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkQsZUFBZSxDQUFDLENBQUE7QUFDM0UsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFDNUQscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBRTlDLHNCQUErQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2hELHNCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxzQkFBbUUsZ0JBQWdCLENBQUMsQ0FBQTtBQXdCcEY7SUFBQTtJQUE0QixDQUFDO0lBbEI3QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsYUFBYSxFQUFFLENBQUMsdUJBQWUsRUFBRSxxQkFBYyxDQUFDO1lBQ2hELFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsdUJBQWUsRUFBRSx3QkFBZ0IsQ0FBQztTQUNuRSxDQUFDO1FBRUQsZUFBTSxDQUFDO1lBQ047Z0JBQ0UsSUFBSSxFQUFFLEdBQUc7Z0JBQ1osU0FBUyxFQUFFLHFCQUFhO2FBQ3RCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLHNCQUFjO2FBQzFCO1NBQ0YsQ0FBQzs7b0JBQUE7SUFDMEIsbUJBQUM7QUFBRCxDQUE1QixBQUE2QixJQUFBO0FBQWhCLG9CQUFZLGVBQUksQ0FBQSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgcHJvdmlkZSwgZW5hYmxlUHJvZE1vZGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi8rYWJvdXQvaW5kZXgnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vK2hvbWUvaW5kZXgnO1xuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlLCBOYXZiYXJDb21wb25lbnQsIFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9pbmRleCc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbXBvbmVudC4gV2l0aGluIHRoZSBAUm91dGVzIGFubm90YXRpb24gaXMgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlXG4gKiBhcHBsaWNhdGlvbnMgcm91dGVzLCBjb25maWd1cmluZyB0aGUgcGF0aHMgZm9yIHRoZSBsYXp5IGxvYWRlZCBjb21wb25lbnRzIChIb21lQ29tcG9uZW50LCBBYm91dENvbXBvbmVudCkuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWFwcCcsXG4gIHZpZXdQcm92aWRlcnM6IFtOYW1lTGlzdFNlcnZpY2UsIEhUVFBfUFJPVklERVJTXSxcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE5hdmJhckNvbXBvbmVudCwgVG9vbGJhckNvbXBvbmVudF1cbn0pXG5cbkBSb3V0ZXMoW1xuICB7XG4gICAgcGF0aDogJy8nLFxuXHRjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvYWJvdXQnLFxuICAgIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnRcbiAgfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XG4iXX0=
