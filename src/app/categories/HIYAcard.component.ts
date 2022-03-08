import { Component, Input } from "@angular/core";

@Component ({
    selector: 'dsg-HIYAcard',
    templateUrl: 'HIYAcard.component.html',
    styleUrls: ['HIYAcard.component.css']
})

export class HIYACardComponent{
    @Input() img: string;
    @Input() price: number;
    @Input() rating: number;
    @Input() description: string;

    constructor(){
        this.img = "";
        this.price = 0;
        this.rating = 0;
        this.description = "Missing Description";
    }
}