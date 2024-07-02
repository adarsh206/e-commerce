import { useState } from "react"
import { supabase } from "../products";

 export const useSupabase = () => {
    const [products, setProducts] = useState<any>([]);
    const [filterData, setFilterData] = useState<any>([]);
    const [singleProduct, setSingleProduct] = useState<any>([]);

    // Add products from fakestoreapi.com website to supabase
    const getDataFromSupabase = async () => {
    let { data, error } = await supabase.from('allproducts').select('*');

    if(data){
        setProducts(data);
        console.log(data);
    }
    if(error){
        console.log(error);
    }
 }

 const getFilteredData = async (query:string) => {
    let { data, error } = await supabase.from('allproducts').select('*').or(`title.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`);

    if(data){
        setFilterData(data);
        console.log(data);
    }
    if(error){
        console.log(error);
    }
 }

    const getSingleProduct = async (id:number) => {
        let {data, error } = await supabase.from('allproducts').select('*').eq('id',id);

        if(data){
            setSingleProduct(data);  
        }
        if(error){
            console.log(error)
        }
    }


    return { 
        products, 
        getDataFromSupabase,
        filterData,
        getFilteredData,
        singleProduct,
        getSingleProduct
        

    };
}