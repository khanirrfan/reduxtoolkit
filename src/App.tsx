import React, { useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useGetProductsQuery } from './feature/products/productApiSlice';
import { Products } from './types/types';
import { filterProducts, setProducts } from './feature/products/productSlice';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { store } from './store/store';
import { useGetCategoriesQuery } from './feature/categories/categoryApiSlice';

function App() {
const { data: _data, isFetching} = useGetProductsQuery();
const {data: _categoriesData, isFetching: isCategoriesFetched} = useGetCategoriesQuery();
const dispatch = useAppDispatch();
const stat = store.getState();
const [filterValue, setFilterValue] = useState<string[]>([]);
useEffect(() => {
  if(_data) dispatch(setProducts(_data as unknown as Products))
}, [_data])
useEffect(() => {
  dispatch(filterProducts(filterValue))
}, [filterValue])
const filteredProducts = useAppSelector((state) => state.product);
const handleClick = (category:string)  => {
  setFilterValue((state) => (
    state.includes(category) ? state.filter((item) => item !== category) : [...state, category]
  ))
}
return (
  <>
  <div className='App' role="App">
  {_data && [...new Set(_data.products.map((prod) => prod.category))].map((category) => (
        <div 
          onClick={() => {
            handleClick(category);
          }}
          className={`${filterValue.includes(category) ? "active" : ""}`}
        style={{display:"flex", gap:"20px", flexDirection:"row", border:"1px solid", borderRadius:"20px", padding: "5px 15px", cursor:"pointer"}}>{category}</div>
      ))}
      </div>
     <div className="card-container">
      {filteredProducts.products.map((product) => (
        <div className="card">
          <h4>{product.title}</h4>
        <img src={product.thumbnail} alt="Avatar" width={200} height={200}/>
        <div className="container">
        
        <p>{product.description}</p>
        </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
