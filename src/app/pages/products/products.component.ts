import {Component, inject} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-products',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  public products$ = inject(ProductsService).products$;
}
