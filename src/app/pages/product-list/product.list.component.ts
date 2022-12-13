import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductInfo} from "../../models/productInfo";
import { products } from 'src/app/mockData';

@Component({
    selector: 'app-product.list',
    templateUrl: './product.list.component.html',
    styleUrls: ['./product.list.component.css']
})
export class ProductListComponent implements OnInit {

  // Page Data
  productData: ProductInfo[];


  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {

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

  remove(name: string) {
    this.productService.delete(name).subscribe({
     next: (data: any) => {
      this.getAllFormData();
      console.log(data);
     },
     error: err => console.log(err),
    });
  }

  onEditSelected(name: string)
  {
    this.router.navigateByUrl('/edit/'+name);
  }
}
