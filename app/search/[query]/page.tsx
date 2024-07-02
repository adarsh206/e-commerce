/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import SearchResult from '@/components/SearchResult';

const page = () => {
    const { query } = useParams();
    const { filterData, getFilteredData } = useSupabase();

    useEffect(() => {
      getFilteredData(query.toString());
    },[]);    
    
    

  return (
    <div>
      <SearchResult filterData = {filterData}/>
    </div>
  )
}

export default page