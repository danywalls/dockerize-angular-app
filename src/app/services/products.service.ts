import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment} from "../../environments/environment";

export type Product = {
  id: string;
  title: string;
  image: string;
  price: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private http = inject(HttpClient)
  public products$ = this.http.get<Product[]>(environment.api);
  public productById = (id: string) => this.http.get<Product>(`${environment.api}/${id}`);
}
