'use strict';

import { Injectable } from '@angular/core';

// Common data service
@Injectable()
export class DataSvc {

    // get data for grid
    public getData(count: number): any[] {
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
            data: any[];
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
    }
    // get sales 
    public getSales(): any[] {
        var productSales = [
            { name: 'Televisions', units: 'M', current: 8.3, target: 7.5 },
            { name: 'Computers', units: 'M', current: 8.1, target: 8 },
            { name: 'Video Games', units: 'M', current: 8.1, target: 7.5 },
            { name: 'Home Audio', units: 'M', current: 6.8, target: 6.5},
            { name: 'Car Audio', units: 'M', current: 6.4, target: 6.5 },
            { name: 'Appliances', units: 'M', current: 4.1, target: 4 },
            { name: 'DVDs', units: 'M', current: 3.1, target: 4 },
            { name: 'Furniture', units: 'M', current: 2.3, target: 2 }
        ];
        return productSales;
    }
}



