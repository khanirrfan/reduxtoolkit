import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Products } from '../../types/types';
import { baseurl } from '../../baseurl';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl:`${baseurl()}/products`}),
    endpoints(builder){
        return {
            getProducts: builder.query<Products, number | void>({
                query: () => ''
            })
        }
    }
});

export const {useGetProductsQuery } = productApi;