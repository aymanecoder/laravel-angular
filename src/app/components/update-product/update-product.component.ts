import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
   myform!: FormGroup;
   data: any;
   id!: string;
  constructor(private productService:DataService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    // this.id = this.router.params['postId'];
    this.productService.getProducts().subscribe(products => {
      this.data = products;
      console.log(this.data);
    })
    this.myform = this.formBuilder.group({
      reference:['',Validators.required],
      description:['',Validators.required],
      quantite:['',Validators.required],
      prix:['',Validators.required],


     })
  }
  updateProduct() {
      return this.productService.updateProduct(this.id,this.myform.value).subscribe(res=> {
        alert('Product updated successfully')
      })
  }

}
