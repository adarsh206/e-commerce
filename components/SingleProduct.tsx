"use client";

import Image from "next/image";
import React from "react";
import Ratings from "./shared/Ratings";
import AddToCardContainer from "./AddToCardContainer";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <div className="flex justify-between">
        

        {

        singleProduct.map((product: any) => {
          return (
            <div key={product.id}  className="flex">
              <div className="flex">
              <div className="bg-gray-100">
                <Image
                  className="mix-blend-multiply p-4"
                  src={product.image}
                  width={300}
                  height={300}
                  alt={product.title}
                />
              </div>

              <div className="mx-4 w-[70%]">
                <h1 className="font-bold text-lg">{product.title}</h1>
                <p>{product.description}</p>
                <Ratings ratings={product.rating} />
                <h1 className="font-bold">Price : {`$${product.price}`}</h1>
                <div>
                  <h1 className="font-bold text-sm">About this Item</h1>
                  <li>Set of 6 Latest Stylish Design Bracelets</li>
                  <li>Gold Plated for high durability</li>
                  <li>Suitable for Casual, Party or Daily Wear</li>
                  <li>Gifts for Girls, Girlfriend, Wife, Daughter</li>
                  <li>
                    Shining diva is a well known brand across fashion jewellery
                    sector.
                  </li>
                  <li>
                    Shining Diva products are preferred by many Designers, Stars
                    and Celebrities.{" "}
                  </li>
                </div>
              </div>
            </div>
            <AddToCardContainer product = {product}/>
            </div>
          
          );
        })
        }
       </div>
       
    </div>    
    
  );
};

export default SingleProduct;
