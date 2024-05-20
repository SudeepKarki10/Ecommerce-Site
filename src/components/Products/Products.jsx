import { useEffect, useState } from "react";
import Product from "./Product";
import SingleProduct from "./SingleProduct";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      {!selectedProduct ? (
        <>
          <h1 className="text-center font-bold text-3xl my-6">Our Products</h1>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {products.map((product) => (
                  <Product
                    key={product.id}
                    category={product.category}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    onClick={() => handleProductClick(product)}
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <SingleProduct
          id={selectedProduct.id}
          category={selectedProduct.category}
          title={selectedProduct.title}
          description={selectedProduct.description}
          price={selectedProduct.price}
          image={selectedProduct.image}
        />
      )}
    </div>
  );
}
