import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

getProductsIdx(){
  return this.http.get('https://pam1bo-default-rtdb.firebaseio.com/productos_idx.json');
}

getProduct(codProd: string){
  return this.http.get(`https://pam1bo-default-rtdb.firebaseio.com/productos/${codProd}.json`);
}

}
