import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-aproduct',
  templateUrl: './view-aproduct.component.html',
  styleUrls: ['./view-aproduct.component.css']
})
export class ViewAProductComponent {
  
  prodId:any
  productdata:any

  constructor(private ps:ProductService,private ar:ActivatedRoute)  {  }

  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.prodId=data["id"]

      this.ps.viewProduct(this.prodId).subscribe((data:any)=>{
        this.productdata=data
      })
    })

  }

}
