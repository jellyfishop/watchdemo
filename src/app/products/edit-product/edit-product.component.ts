import { Component } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  pid: any
  pdata: any
  constructor(private ar: ActivatedRoute, private ps: ProductService) { }
  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.pid = data["id"]
    })
    this.ps.viewProduct(this.pid).subscribe((data: any) => {
      this.pdata = data
      console.log(this.pdata);

    })
  }
  updateProduct(form: any) {
  console.log(this.pdata);
  this.ps.updateProduct(this.pid,this.pdata).subscribe((item:any)=>{
    alert("updated successfully")
  })
  
    

  }

}
