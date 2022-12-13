import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";
import { ProductInfo } from 'src/app/models/productInfo';
import { products } from 'src/app/mockData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  productData: ProductInfo[];


  constructor(private productService: ProductService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getAllFormData();
   
  }
  
  getAllFormData() {
    this.productService.getAllInPage().subscribe(data => {
      if(data.length != 0) {
        this.productData = data;
      }
      else
      {
        this.productData = products;
      }
    });
  }
}
