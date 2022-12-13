import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {ProductInfo} from "../../models/productInfo";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

    product: ProductInfo;

    constructor(private productService: ProductService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    isEdit = false;

    ngOnInit() {


        const name = this.route.snapshot.paramMap.get('name');
        if(name) {
            this.isEdit=true;
            this.productService.getDetail(name).subscribe(data => 
                this.product = data);
        }

    }

    onSubmit()
    {
        this.update();
    }

    update() {
        this.productService.update(this.product).subscribe(data => {
            if (!data) throw new Error();
            this.router.navigate(['/seller/product']);
        },
        error => console.log(error));
    }
}
