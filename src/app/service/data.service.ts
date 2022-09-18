import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    let auth_token = "4|YckfTQX9lI5B8t1dwMeWG1EEtXFagsF6g4XoaRmS";

const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  });

const requestOptions = { headers: headers };
    return this.http.get<any>('http://localhost:8000/api/products',requestOptions);
  }
  AddProduct(data: any) : Observable<any>{
    let auth_token = "4|YckfTQX9lI5B8t1dwMeWG1EEtXFagsF6g4XoaRmS";

const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  });

const requestOptions = { headers: headers };
    return this.http.post<any>('http://localhost:8000/api/products',data,requestOptions);
  }

  delete(productID:string){
    let auth_token = "4|YckfTQX9lI5B8t1dwMeWG1EEtXFagsF6g4XoaRmS";

const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  });

const requestOptions = { headers: headers };
    return this.http.delete('http://localhost:8000/api/products'+'/'+productID,requestOptions)
  }
  updateProduct(productID:string,data:any){
    let auth_token = "4|YckfTQX9lI5B8t1dwMeWG1EEtXFagsF6g4XoaRmS";

    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });

      const requestOptions = { headers: headers };
    return this.http.put('http://localhost:8000/api/products'+'/'+productID,data,requestOptions)
  }
  }




