import { Component, OnInit } from "@angular/core";
import { enableDebugTools } from "@angular/platform-browser";



@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    isdisabled: boolean = true;
    ngOnInit(): void {
        setTimeout(() => {
            this.isdisabled = false;
        }, 4000);
    }
}

