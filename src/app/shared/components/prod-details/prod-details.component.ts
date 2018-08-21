import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Product } from 'shared/models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {
idProduct;
products: any;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

 async ngOnInit() {
   this.idProduct = this.activatedRoute.snapshot.queryParams['id'];
  this.populateProducts();
  }

  private populateProducts() {
    this.productService
      .getAll()
      .subscribe(products => {
        this.products = products;
        console.log('je suis la ', this.products);
      });

}
}
