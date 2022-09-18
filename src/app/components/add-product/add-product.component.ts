// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form!: FormGroup;
  constructor(private productService: DataService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
     reference:['',Validators.required],
     description:['',Validators.required],
     quantite:['',Validators.required],
     prix:['',Validators.required],


    })
  }
  AddProduct(){
      return this.productService.AddProduct(this.form.value).subscribe((res)=>alert("added with success"));
  }

}
