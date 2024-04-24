import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }
  url='http://localhost:8080';

  login(data:any)
  {
    return this.httpClient.post(this.url+"/admin/login",data,{
      headers:new HttpHeaders().set('Content-type','application/json')
    })
  }

  getCustomer()
  {
    return this.httpClient.get(this.url+"/admin/getData",{
      headers:new HttpHeaders().set('Content-type','application/json')
    })
  }

  addProduct(data: any)
  {
    return this.httpClient.post(this.url+"/admin/Add",data,{
      headers:new HttpHeaders().set('Content-type','application/json')
    })

  }

  getProduct()
  {
    return this.httpClient.get(this.url+"/admin/getProduct",{
      headers:new HttpHeaders().set('Content-type','application/json')
    })
  }

  getP(data:any)
  {
    return this.httpClient.get(this.url+"/admin/getP/"+ data,{
      headers:new HttpHeaders().set('Content-type','application/json')
    })
  }

  updateProduct(data:any)
  {
    return this.httpClient.patch(this.url+"/admin/update"+ data,{
      headers:new HttpHeaders().set('Content-type','application/json')
    })
  }
}
