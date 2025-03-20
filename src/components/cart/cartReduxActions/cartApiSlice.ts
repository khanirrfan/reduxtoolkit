import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseurl } from '../../../baseurl';
import { CartData } from '../../../types/carts';

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${baseurl()}/carts` }),
    endpoints(builder) {
        return {
            getCartItems: builder.query<CartData, number | void>({
                query: () => ''
            })
        };
    }
});

export const { useGetCartItemsQuery } = cartApi;
