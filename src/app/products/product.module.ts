import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,    
    SharedModule,
    HttpClientModule
  ],
  declarations: [ProductListComponent],
  providers: [ProductService],
  exports: [ProductListComponent]
})
export class ProductModule { }
