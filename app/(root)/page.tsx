import ProductList from '@/components/shared/product/product-list';
import {
  getLatestProducts,
} from '@/lib/actions/product.actions';
import ViewAllProductsButton from '@/components/view-all-products-button';


const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title='Newest Arrivals' limit={4} />
      <div className='flex justify-center items-center my-8'>
        <ViewAllProductsButton />
      </div>
    </>
  );
};

export default Homepage;