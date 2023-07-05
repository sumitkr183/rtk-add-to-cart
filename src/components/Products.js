import ProductCard from "./ProductCard";

const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return data.products;
};

const Products = async () => {
  const products = await fetchProducts();

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
