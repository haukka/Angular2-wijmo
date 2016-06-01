import { FORM_DIRECTIVES } from '@angular/common';
import { Component, Inject } from '@angular/core';

import * as wjInput from 'wijmo/wijmo.angular2.input';
import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2FlexChart from 'wijmo/wijmo.angular2.chart';
import { NameListService } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [FORM_DIRECTIVES, wjInput.WjInputNumber]
})
export class HomeComponent {

  newName: string;
  theNumber: Number;
  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {
	  this.theNumber = 123;
  	  console.log("la");
  }

  /**
   * Calls the add method of the NameListService with the current newName value of the form.
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }

}
