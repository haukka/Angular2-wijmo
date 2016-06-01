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
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var wjInput = require('wijmo/wijmo.angular2.input');
var index_1 = require('../shared/index');
var HomeComponent = (function () {
    function HomeComponent(nameListService) {
        this.nameListService = nameListService;
        this.theNumber = 123;
        console.log("la");
    }
    HomeComponent.prototype.addName = function () {
        this.nameListService.add(this.newName);
        this.newName = '';
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            directives: [common_1.FORM_DIRECTIVES, wjInput.WjInputNumber]
        }), 
        __metadata('design:paramtypes', [index_1.NameListService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFDbEQscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELElBQVksT0FBTyxXQUFNLDRCQUE0QixDQUFDLENBQUE7QUFHdEQsc0JBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFZbEQ7SUFVRSx1QkFBbUIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQU1ELCtCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUE5Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFDakMsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQ3JELENBQUM7O3FCQUFBO0lBMEJGLG9CQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSxxQkFBYSxnQkF5QnpCLENBQUEiLCJmaWxlIjoiYXBwLytob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIHdqSW5wdXQgZnJvbSAnd2lqbW8vd2lqbW8uYW5ndWxhcjIuaW5wdXQnO1xuaW1wb3J0ICogYXMgd2pOZzJGbGV4R3JpZCBmcm9tICd3aWptby93aWptby5hbmd1bGFyMi5ncmlkJztcbmltcG9ydCAqIGFzIHdqTmcyRmxleENoYXJ0IGZyb20gJ3dpam1vL3dpam1vLmFuZ3VsYXIyLmNoYXJ0JztcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTLCB3aklucHV0LldqSW5wdXROdW1iZXJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuXG4gIG5ld05hbWU6IHN0cmluZztcbiAgdGhlTnVtYmVyOiBOdW1iZXI7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBIb21lQ29tcG9uZW50IHdpdGggdGhlIGluamVjdGVkXG4gICAqIE5hbWVMaXN0U2VydmljZS5cbiAgICpcbiAgICogQHBhcmFtIHtOYW1lTGlzdFNlcnZpY2V9IG5hbWVMaXN0U2VydmljZSAtIFRoZSBpbmplY3RlZCBOYW1lTGlzdFNlcnZpY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZUxpc3RTZXJ2aWNlOiBOYW1lTGlzdFNlcnZpY2UpIHtcblx0ICB0aGlzLnRoZU51bWJlciA9IDEyMztcbiAgXHQgIGNvbnNvbGUubG9nKFwibGFcIik7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgdGhlIGFkZCBtZXRob2Qgb2YgdGhlIE5hbWVMaXN0U2VydmljZSB3aXRoIHRoZSBjdXJyZW50IG5ld05hbWUgdmFsdWUgb2YgdGhlIGZvcm0uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGZhbHNlIHRvIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pdCBiZWhhdmlvciB0byByZWZyZXNoIHRoZSBwYWdlLlxuICAgKi9cbiAgYWRkTmFtZSgpOiBib29sZWFuIHtcbiAgICB0aGlzLm5hbWVMaXN0U2VydmljZS5hZGQodGhpcy5uZXdOYW1lKTtcbiAgICB0aGlzLm5ld05hbWUgPSAnJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuIl19
