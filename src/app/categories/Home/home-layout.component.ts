import { Component, OnInit } from "@angular/core";
import { ProductItemModel } from "../product-item.model";
import { ProductService } from "../products.service";

@Component({
    selector: 'dsg-home-page',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent implements OnInit {
    products: ProductItemModel[] = [];

    constructor(private prodcutsService:ProductService) {
    }
    ngOnInit(): void {
        this.prodcutsService.getProducts().subscribe((data: ProductItemModel []) => {
            console.log("Fetching products");
            for (var product of data){
                //console.log(product);
                this.products.push(product);
            }
        });
    }
}