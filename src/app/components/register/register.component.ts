import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private http:HttpClient,private formBuilder:FormBuilder,private router:Router) { }
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    })
  }
  register(){
    this.http.post('http://localhost:8000/api/auth/register',this.form.value, {headers: new HttpHeaders().set('Authorization', '4|YckfTQX9lI5B8t1dwMeWG1EEtXFagsF6g4XoaRmS')}).subscribe(res => {
      this.router.navigate(['/login'])
    });
  }

}
