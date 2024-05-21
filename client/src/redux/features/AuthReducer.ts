import AuthService from "@/services/AuthService";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    loading: boolean;
    user: User | null;
    error: string | null;
}

interface User {
    id: string;
    name: string;
    email: string;
}

interface Credentials {
    email: string;
    password: string;
}

const initialState: AuthState = {
    loading: false,
    user: null,
    error: null,
};

export const login = createAsyncThunk<User, Credentials>(
    "auth/login",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await AuthService.login(credentials);
            return response.data;
        } catch (error: any) {
            console.error(error);
            return rejectWithValue("Something went wrong!");
        }
    }
);

export const register = createAsyncThunk<User, Credentials>(
    "auth/register",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await AuthService.register(credentials);
            return response.data;
        } catch (error: any) {
            console.error(error);
            return rejectWithValue("Something went wrong!");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.payload as string;
            })
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.payload as string;
            });
    },
});

export default authSlice.reducer;
