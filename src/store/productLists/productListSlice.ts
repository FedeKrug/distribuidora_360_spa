import { /*PayloadAction,*/ createSlice } from "@reduxjs/toolkit";



export type AuthStateType = {
    status: 'checking' | 'not-authenticated' | 'authenticated' | 'registered';
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    errorMessage: string | null;
}

const initialState: any = {
    listas: [],
    newProductList: {
        id: 0,
        title: "",
        photo_url: "",
    },

    loading: false,
    errorMessage: null,
}

const productListSlice = createSlice({
    name: 'productList',
    initialState,

    reducers: {
        createNewProductList: (status, { payload }) => {
            status = { ...payload };
            status.id = status.id + 1;
        },
        updateProductList: (status, { payload }) => {
            status = { ...payload }

        }

    }

})

export const { } = productListSlice.actions;
export default productListSlice.reducer;