import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


import { IProduct } from './product';

@Injectable()
export class ProductService {

    // Remember to include 'api' folder as an 'asset' in the 'angular-cli.json' file
    private productUrl:string = './api/products/products.json';
    private products: IProduct[];
    
    constructor(private _httpClient: HttpClient) { }

    // Helpers
    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }

    getProducts(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this.productUrl)        
            .do(data => console.log('All: ' + JSON.stringify(data))) // You can peek the data
            .catch(this.handleError);
    }
}
