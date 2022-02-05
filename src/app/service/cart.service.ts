import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = [];
  //property to emit or allow users to subscribe for data
  public productList = new BehaviorSubject<any>([]); 

  constructor() { }
//getter for getting products
  getProducts(){
   return this.productList.asObservable();

  }
  //setter for setting a product
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  
  }
//adding the product to cart list
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice;
  }
//calculating total price of products in the cart
  getTotalPrice(){
    let grandTotal  = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
  }

}
