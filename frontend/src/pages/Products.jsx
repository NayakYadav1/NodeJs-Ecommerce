import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productsSlice';

export default function Products() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, sort: 'createdAt' }));
  }, [dispatch]);

  return (
    <div>
      <ProductFilters />
      <ProductList products={products} />
      <Pagination />
    </div>
  );
}