import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInfo } from 'src/app/models/productInfo';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  isProductFound: boolean;
  isProductSearchEntered: boolean;
  search: string;
  productInfo: ProductInfo;
  product: ProductInfo;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
   this.isProductFound = false;
  }

  onSearch() {
    this.isProductSearchEntered=true;
    if(this.search) {
      this.productService.getDetail(this.search).subscribe(data => {
        if(data) {
          this.isProductFound = true;
          this.productInfo = data;
        }
      },
      error => this.isProductFound = false)
    }
  }

  onCancel() {
    this.router.navigateByUrl('/product');
  }

}
