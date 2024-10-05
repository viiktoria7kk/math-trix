import { configureStore } from '@reduxjs/toolkit';
import { emptyApi } from '@/api/emptyApi';

const rootReducer = {
    [emptyApi.reducerPath]: emptyApi.reducer,
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(emptyApi.middleware),
});