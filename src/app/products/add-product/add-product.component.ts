import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private fb: FormBuilder,private ps:ProductService,private route:Router) { }
  ngOnInit(): void {

  }
  addProductForm = this.fb.group({
    id: [""],
    productName: [""],
    categoryId: [""],
    description: [""],
    price: [""],
    isAvailiable: [""],
    productImage: [""],
    rating: [""],
    review: [""],
    vendorName: [""],
    warrenty: [""]
  })
  addProduct(){
    let Pdata={
      id:this.addProductForm.value.id,
      productName:this.addProductForm.value.productName,
      categoryId:this.addProductForm.value.categoryId,
      description:this.addProductForm.value.description,
      price:this.addProductForm.value.price,
      isAvailiable:this.addProductForm.value.isAvailiable,
      productImage: this.addProductForm.value.productImage,
      rating: this.addProductForm.value.rating,
      review: this.addProductForm.value.review,
      vendorName:this.addProductForm.value.vendorName,
      warrenty:this.addProductForm.value.warrenty

    }
    this.ps.addNewProduct(Pdata).subscribe((item:any)=>{
      alert('added new product')
      this.route.navigateByUrl('products')

    })
  }

}
