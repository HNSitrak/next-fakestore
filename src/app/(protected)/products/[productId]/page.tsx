'use client';

import { useParams } from "next/navigation";

const ProductPage = () => {

  const params = useParams();
  // Your product page content goes here
  return (
    <div>
      <h1>Product Page {params?.productId}</h1>
      
    </div>
  );
};

export default ProductPage;