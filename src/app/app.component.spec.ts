import {
  ComponentFixture,
  TestBed
} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import { ProductsService} from "./services/products.service";
import {of} from "rxjs";
import {MOCK_PRODUCTS} from "./tests/mock";

export class MockProductService {
  public products$ = of(MOCK_PRODUCTS)
}

describe('app component', () => {
  let component: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        {
          provide: ProductsService,
          useClass: MockProductService,
        },
      ],
    }).compileComponents();

    component = TestBed.createComponent<AppComponent>(AppComponent);
  });

  it('should render the product', () => {
    component.detectChanges();
    const productTitle: HTMLElement =
      component.nativeElement.querySelector('h2');
    expect(productTitle.innerText).toEqual(MOCK_PRODUCTS[0].title);
  });
});
