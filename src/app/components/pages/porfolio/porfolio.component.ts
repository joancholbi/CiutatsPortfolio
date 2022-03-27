import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {

  productos_idx: any = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.getProductsIdx()
    .subscribe((resp:any) => {
      this.productos_idx = resp;
    });

  }

}
