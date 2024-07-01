"use client";

import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const { query } = useParams();
  return (
    <div>{query}</div>
  )
}

export default page