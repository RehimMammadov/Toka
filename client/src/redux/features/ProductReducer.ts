import { ProductService } from "@/services/ProductService";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface ProductState {
    loading: boolean;
    product: Product | null;
    error: string | null
}

interface Product {
    id: string;
    title: string;
    price: number;
    images: string[];
}

interface Credentials {
    title: string;
    price: number;
    images: string[];
}

const initialState: ProductState = {
    loading: false,
    product: null,
    error: null
}

export const getProducts = createAsyncThunk<Product, Credentials>(
    "/", async () => {
        try {
            const response = await ProductService.getProducts();
            return response.data;
        } catch (error: any) {
            console.error(error);
            throw new Error("Something went wrong!");
        }
    }
)