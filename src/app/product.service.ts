import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // Method to get all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Method to add a new product
  addProduct(productData: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, productData);
  }

  // Method to delete a product by ID
  deleteProduct(productId: string): Observable<void> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.delete<void>(url);
  }

  // Method to update a product by ID
  updateProduct(productId: string, updatedData: Partial<Product>): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.put<Product>(url, updatedData);
  }
}

