'use client';

import React, { useEffect, useState } from 'react';
import BlogComp from "@/components/blogcomp";

export default function BlogPage() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/blog');
        const data = await res.json();
        setBlogData(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    }

    fetchData();
  }, []);

  return <BlogComp data={blogData} />;
}