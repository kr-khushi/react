import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";

const SingleProduct = () => {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const [data, loading, error] = useFetchData(`${url}`);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>Error occurred ...</h1>;
  }
  return (
    <>
      <div className="single-product-details">
        <img src={data?.image} alt={data?.title} style={{ height: "500px" }} />
        <h2>{data?.title}</h2>
        <p>Price: ${data?.price?.toFixed(2)}</p>
        <p>Description: {data?.description}</p>
        <p>Category: {data?.category}</p>
        <p>Rating: {data.rating.rate}</p>
      </div>
    </>
  );
};

export default SingleProduct;
