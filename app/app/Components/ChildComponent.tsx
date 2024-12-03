import React from "react";
import Image from "next/image";


interface CarProps {
    carName: string;
    price: string;
    rating: string;
    reviews: string;
}


interface ChildComponentProps {
    cars: CarProps[]; 
}

const ChildComponent: React.FC<ChildComponentProps> = ({ cars }) => {
    return (
        <div className="flex py-5 px-14 gap-4 flex-col sm:border-2  border-slate-900 md:flex-row md:flex-wrap lg:flex-row lg:flex-nowrap lg:w-full">
            
            {cars.map((car, index) => (
            
    
                <div key={index} className="car-card text-center ml-10 mt-28  hover:scale-105 bg-slate-200 transform transition duration-300 ease-in-out ">
                
                    <Image 
                        src={`/images/Car${index + 2 }.png`}
                        alt={`${car.carName} image`}
                        width={300}
                        height={300}
                    />

                    
                    <h2 className="text-blue-950 font-bold py-3">{car.carName}</h2>
                    <p className="text-green-800"> {car.price}</p>
                    <span className="text-orange-500"> {car.rating}</span>
                    <span className="text-gray-600 font-bold pl-3"> {car.reviews}</span>
                </div>
                
            ))}
        </div>
    );
};
1
export default ChildComponent;