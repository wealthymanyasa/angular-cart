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
    console.log(this.cartItemList)
  }
//calculating total price of products in the cart
  getTotalPrice(){  
    let grandTotal  = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
  }

  removeCartItem(product:any){
    this.cartItemList.map((a :any, index:any ) =>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    } )
  }

  removeAllCart(){
this.cartItemList = []
this.productList.next(this.cartItemList); 

  }

}
