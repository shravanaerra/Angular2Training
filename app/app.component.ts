import {ProductListComponent} from'./products/product-list.component';
import {ProductService} from './products/product.service';
import {Component} from "angular2/core";
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `<div>
<products-app></products-app>
</div>
`,
    directives: [ProductListComponent],
    providers: [ProductService, HTTP_PROVIDERS]
    })

export class AppComponent {
    
}