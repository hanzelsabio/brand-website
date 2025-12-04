import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { useCart } from "../../context/CartContext";

function Collection() {
  const { oversizedTee, boxTee, loading, error } = useProducts();
  const { addToCart } = useCart();

  if (loading)
    return (
      <section className="collection_section">
        {/* Loading Skeleton Component */}
        <div className="collection_content max-w-6xl mx-auto py-10 px-8">
          <div className="collection_body grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="p-4 flex flex-col justify-between">
                <div className="w-full h-50 bg-gray-100 mb-4"></div>
                <div className="h-4 bg-gray-100 w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-100 w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <section className="collection_section">
      {/* Brand Oversized Tee Collection */}
      <div className="collection_content max-w-6xl mx-auto py-10 px-8">
        <h2 className="collection_header text-xl font-small mb-6 text-center uppercase">
          Brand Oversized Tee
        </h2>
        <div className="collection_body grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {oversizedTee.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="p-4 flex flex-col justify-between transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              {/* Product Info */}
              <h3 className="text-gray-800 font-medium text-center text-sm mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-gray-900 font-semibold text-center text-sm mb-4">
                PHP {product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Brand Box Tee Collection */}
      <div className="collection_content max-w-6xl mx-auto mt-10 py-10 px-8">
        <h2 className="collection_header text-xl font-small mb-6 text-center uppercase">
          Brand Box Tee
        </h2>
        <div className="collection_body grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {boxTee.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="p-4 flex flex-col justify-between transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              {/* Product Info */}
              <h3 className="text-gray-800 font-medium text-center text-sm mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-gray-900 font-semibold text-center text-sm mb-4">
                PHP {product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collection;
