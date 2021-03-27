import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44337/api/products/getall';
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {    // bu şu demek, subscribe olunabilir bir response model döneceksin.
   return this.httpClient.get<ProductResponseModel>(this.apiUrl); // dolayısıyla bu da return olacak.
      
  } 
}






