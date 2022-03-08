export class ProductItemModel {
    img: string;
    price: number;
    description: string;
    rating: number;

    constructor(img: string, price: number, description: string, rating: number) {
        this.img = img;
        this.price = price;
        this.description = description;
        this.rating = rating;
    }
}