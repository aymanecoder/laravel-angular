import { Component, OnInit,ViewChild } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {  AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import {MatDialog} from '@angular/material/dialog';
import { UpdateProductComponent } from '../update-product/update-product.component';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['reference', 'description', 'quantite', 'prix','action'];
  dataSource = new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private ProductsService: DataService,private router: Router,private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.getProductsFromApi()
  }
  getProductsFromApi(){
     return this.ProductsService.getProducts().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
     });
  }
  deleteProduct(productID:string){
     return this.ProductsService.delete(productID).subscribe(
        data => {
        alert('Product deleted');
    }
     );
  }
  openDialog() {
    this.dialogRef.open(UpdateProductComponent,{
      width:'30%'
    })

  }




}
