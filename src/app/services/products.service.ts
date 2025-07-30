import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment} from "../../environments/environment";
import {EnvironmentConfigService} from "./environment-config.service";

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
  private runtimeConfig = inject(EnvironmentConfigService)
  private apiUrl = this.runtimeConfig.get('API_URL');
  public products$ = this.http.get<Product[]>(this.apiUrl);
  public productById = (id: string) => this.http.get<Product>(`${this.apiUrl}/${id}`);
}
