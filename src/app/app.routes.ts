import { Routes } from '@angular/router';
import {ProductsComponent} from "./pages/products/products.component";
import {ProductDetailsComponent} from "./pages/product-details/product-details.component";
import {AboutComponent} from "./pages/about/about.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

export const routes: Routes = [
  {
    path:'',
    component: ProductsComponent
  },
  {
    path:'product-detail/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
     path:'**',
     component: NotFoundComponent
   }
];
