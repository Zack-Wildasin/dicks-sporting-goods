import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from 'src/app/categories/product-item.model';
import { ProductService } from 'src/app/categories/products.service';

@Component({
  selector: 'dsg-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public ps : ProductService) { }

  ngOnInit(): void {
  }

  addProduct(product : ProductItemModel){
    //console.log("You clicked add product");
    //console.log(product);
    this.ps.addProduct(product);
  }
}
