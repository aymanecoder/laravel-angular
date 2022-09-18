import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators } from '@angular/forms';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) {
   

   }
   
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    })
  }
  login() {
    this.http.post('http://localhost:8000/api/auth/login',this.form.value, {headers: new HttpHeaders().set('Authorization', '4|YckfTQX9lI5B8t1dwMeWG1EEtXFagsF6g4XoaRmS')}).subscribe(res => {
      this.router.navigate(['/products'])

  });
}
  

  }
