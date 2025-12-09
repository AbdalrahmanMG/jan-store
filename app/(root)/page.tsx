import ProductList from "@/components/shared/product/productList";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();


  return (
    <>
      <ProductList data={latestProducts} title="New Arrivals" />
    </>
  );
};

export default HomePage;
