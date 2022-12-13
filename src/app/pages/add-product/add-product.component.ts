import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInfo } from 'src/app/models/productInfo';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: ProductInfo;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  productId: string;

  ngOnInit() {
      this.product = {
        name:'',
        description:'',
        price:0,
        quantity:0,
        status:'',
        features:''
      }
  }

  onSubmit() {
      this.add();
  }

  add() {
    if(this.product.status == "0") {
      this.product.status = "Available";
    }
    else {
      this.product.status = "Unavailable";
    }
      this.productService.create(this.product).subscribe(prod => {
              if (!prod) throw new Error;
              this.router.navigate(['/seller/product']);
          },
          e => {
          });
  }

  ngAfterContentChecked(): void {
      console.log(this.product);
  }

}
