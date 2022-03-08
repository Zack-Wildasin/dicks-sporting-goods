import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item.model";

@Injectable(
    {providedIn: 'root'}
)

export class ProductService{
    private baseUrl:string = "https://dicks-sporting-goods-c8c42-default-rtdb.firebaseio.com/";
    private productsEndPoint:string = "products.json";

    constructor(private http:HttpClient){

    }

    getProducts(){
        return this.http.get<ProductItemModel []>(this.baseUrl + this.productsEndPoint);
    }

    getProduct(index:number){
        return this.http.get<ProductItemModel>(this.baseUrl + 'products' + '/' + index + '.json');
    }
}