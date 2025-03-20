import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseurl } from '../../../baseurl';
import { Products } from '../../../types/products';

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${baseurl()}/products/category-list` }),
    endpoints(builder) {
        return {
            getCategories: builder.query<Products, number | void>({
                query: () => ''
            })
        };
    }
});

export const { useGetCategoriesQuery } = categoryApi;
