import {Component, inject, input} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {toObservable} from "@angular/core/rxjs-interop";
import {switchMap} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-product-details',
  imports: [
    AsyncPipe
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  standalone: true,
})
export class ProductDetailsComponent {

  #productService = inject(ProductsService);
  id = input.required<string>();
  product$ = toObservable(this.id).pipe(
    switchMap(productId => this.#productService.productById(productId))
  )
}
