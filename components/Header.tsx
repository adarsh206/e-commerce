'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";

const itemList = [
  "All",
  "Fresh",
  "Sell",
  "Gift Cards",
  "Buy Again",
  "Browsing History",
  "ECommerce Pay",
  "Gift Ideas",
  "Gym",
  "Books",
  "Health, Household & Personal Care",
];

const Header = () => {
    const [query, setQuery] = useState<string>("");
    const router = useRouter();
    const searchHandler = () => {
        router.push(`/search/${query}`);
    }

  return (
    <>
      <div className="bg-[#3a4351] text-white py-1">
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <Link
            href={"/"}
            className="w-[10%] text-orange-500 font-bold md:xl lg:text-2xl sm:text-xs "
          >
            ECOMMERCE
          </Link>
          <div className="w-[60%] flex items-center">
            <input
              className="w-full p-2 rounded-l-md text-black outline-none"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
            />
            <div 
            onClick={searchHandler}
            className="bg-orange-500 p-2 rounded-r-md cursor-pointer">
              <FaSearch size={"24px"} className="text-black" />
            </div>
          </div>
          <div className="flex items-center justify-around w-[20%]">
            <div className="cursor-pointer">
              <h1 className="text-xs">Hello, Adarsh</h1>
              <h1 className="font-medium text-sm">Accounts & Lists</h1>
            </div>
            <div>
              <p className="text-xs">Returns</p>
              <h1 className="font-medium text-sm">& Orders</h1>
            </div>
            <div className="cursor-pointer">
              <p className="relative top-1 left-2.5">0</p>
              <div className="flex">
                <div>
                  <FaCartArrowDown size={"30px"} />
                </div>
                <h1 className="mt-2">Cart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#232F3E] w-full text-white p-2 flex items-center justify-between">
        <div>
          {
            itemList.map((link, idx) => {
                return (
                <Link
                    href={`/${link}`}
                    key={idx}
                    className="mx-2 hover:border border border-transparent hover:border-white p-2"
                >
                    {link}
                </Link>
                );
            })
          }
        </div>
        <div className="mr-5">
          <h1 className="text-[#FEBD69] font-bold cursor-pointer hover:underline">
            Sign Out
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
