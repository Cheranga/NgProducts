import { Component, OnInit } from '@angular/core';
import { ProductService } from "./product.service";
import { IProduct } from "./product";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'prodapp-v2-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  appCurrency:string = 'AUD';
  showImages:boolean = false;
  products:IProduct[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products=>this.products = products, error=>console.log(JSON.stringify(error)));

    console.log(JSON.stringify(this.products));

    console.log('Product list initialized...');
  }

  showHideImages():void{
    this.showImages = !this.showImages;
  }

  onRatingClicked(rating:number):void{
    alert(rating + ' stars!');
  }

}
