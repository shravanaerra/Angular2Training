import {Component, OnInit, Injectable} from "angular2/core";
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent} from '../shared/star.component';
import {ProductService} from './product.service';
import {IProduct} from "./product";

@Component({
    selector: 'products-app',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent]
})

export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List Interpolation";
    showImage: boolean = true;
    listFilter: string;
    errorMessage: string;
    products: IProduct[];

    constructor(private _productService: ProductService) {

    }

    toogleImage():void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void{
        console.log("In OnInit event!!!!!");
        this._productService.getProducts()
            .subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error);
    }
}