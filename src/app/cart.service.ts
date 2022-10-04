import { Injectable } from '@angular/core';
import { Product } from './products';
import {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  //ajoute un produit au tab d' items
  addToCart(product: Product) {
    this.items.push(product);
  }

  // collect les products ajoutés au panier et renvoie chaque article avec sa qté
  getItems() {
    return this.items;
  }
  //vide le panier
  clearCart() {
    this.items = [];
    return this.items;
  }

  //pour obtenir les prix d'expédition
  getShippingPrices() {
    return this.http.get<{type:string, price:number} []>
    ('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) { }
}
