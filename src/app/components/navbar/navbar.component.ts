import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialogRef:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialogRef.open(AddProductComponent,{
      width:'30%'
    })
    
  }
}
