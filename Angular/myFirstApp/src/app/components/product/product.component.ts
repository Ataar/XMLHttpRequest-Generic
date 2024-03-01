import { Component, OnInit } from "@angular/core";



@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    // template: `<p>This is product <strong>{{productName}} </strong> with id 
    // < strong > {{ productId }}</strong></p > `,
    styleUrls: ['./product.component.scss']
    //     styles: [`
    //     p {
    //     padding: 20px;
    //     border: 1px solid red;
    //     background- color: #eee;
    // }
    // `]
})

export class ProductComponent implements OnInit { //onInit is interface
    //To Initialize component there is one interface which is implemented on class.
    // interface means custom type.


    productName: string = 'Samsung';
    productId: string = 'P-5635';
    productStatus: string = 'Dispatched';
    res: string = 'Hello Angular'
    res01: string = `<strong>I Love Angular</strong>`
    ngOnInit(): void { // this method is called when the component is initialized.
        console.log("Method not implemented.");
    }

    ngOnDestroy(): void { // this method is called when the component is destroyed.

    }

}