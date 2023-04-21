import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import behaviour subject
import { BehaviorSubject } from 'rxjs';
import { DeleteProductComponent } from './delete-product/delete-product.component';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //obect create for behav sub
  search=new BehaviorSubject("")

  constructor(private Http:HttpClient) { }
  //api call to view all products
  viewAllProduct(){
    return this.Http.get('http://localhost:3000/products')
  }
  //api call to view single product
  viewProduct(productId:any){
    return this.Http.get('http://localhost:3000/products/'+productId)
  }
  //api to delete a product
  DeleteProductComponent(productId:any){
    return this.Http.delete('http://localhost:3000/products/'+productId)
  }
  //api to call to add product
  addNewProduct(productData:any){
    return this.Http.post('http://localhost:3000/products',productData)
  }
  //api call to edit product
  updateProduct(productId:any,productData:any){
    return this.Http.put('http://localhost:3000/products/'+productId,productData)
  }
}
