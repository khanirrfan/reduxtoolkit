import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
// import { store } from '../../../store/store';
// import { useGetCategoriesQuery } from '../../categories/categoryReduxAction/categoryApiSlice';
import { useGetProductsQuery } from '../productReduxActions/productApiSlice';
import { setProducts, filterProducts } from '../productReduxActions/productSlice';
import { Products } from '../../../types/products';

const ProductsView: React.FC = () => {
    const { data: _data, isFetching } = useGetProductsQuery();
    // const {data: _categoriesData, isFetching: isCategoriesFetched} = useGetCategoriesQuery();
    const dispatch = useAppDispatch();
    // const stat = store.getState();
    const [filterValue, setFilterValue] = useState<string[]>([]);
    useEffect(() => {
        if (_data) dispatch(setProducts(_data as unknown as Products));
    }, [_data]);
    useEffect(() => {
        dispatch(filterProducts(filterValue));
    }, [filterValue]);
    const filteredProducts = useAppSelector((state) => state.product);
    const handleClick = (category: string) => {
        setFilterValue((state) =>
            state.includes(category)
                ? state.filter((item) => item !== category)
                : [...state, category]
        );
    };
    if (isFetching) return <p>loading....</p>;
    return (
        <>
            <div className="App" role="App">
                {_data &&
                    [...new Set(_data.products.map((prod) => prod.category))].map(
                        (category, index) => (
                            <div
                                key={category + index}
                                onClick={() => {
                                    handleClick(category);
                                }}
                                className={`${filterValue.includes(category) ? 'active' : ''}`}
                                style={{
                                    display: 'flex',
                                    gap: '20px',
                                    flexDirection: 'row',
                                    border: '1px solid',
                                    borderRadius: '20px',
                                    padding: '5px 15px',
                                    cursor: 'pointer'
                                }}
                            >
                                {category}
                            </div>
                        )
                    )}
            </div>
            <div className="card-container">
                {filteredProducts.products.map((product) => (
                    <div className="card" key={product.id}>
                        <h4>{product.title}</h4>
                        <img src={product.thumbnail} alt="Avatar" width={200} height={200} />
                        <div className="container">
                            <p>{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductsView;
