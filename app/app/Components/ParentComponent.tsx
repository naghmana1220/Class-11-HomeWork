import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    class Cars {
        carName: string;
        price: string;
        rating: string;
        reviews: string;

        constructor(name:string, price:string, rating:string, reviews:string){
            this.carName = name;
            this.price = price;
            this.rating = rating;
            this.reviews = reviews;
        }
    }
    const cars = [
        new Cars("Toyota Corolla", "PKR 59.7 - 75.5 lacs", "★★★☆☆", "621 Reviews"),
        new Cars("Suzuki Alto", "PKR 23.3 - 30.5 lacs", "★★★☆☆", "199 Reviews"),
        new Cars("Honda City", "PKR 46.5 - 58.5 lacs", "★★★☆☆", "458 Reviews"),
    ]

    return (
        <div>
            <ChildComponent
            cars={cars}
            />  
        </div>
    )
}

export default ParentComponent