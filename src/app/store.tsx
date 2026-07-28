import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/crud_account_setting/crud_slice";
import quranReducer from "@/features/quran/quran_slice";
import adkarReducer from "@/features/adkar/Adkar_slice";

export const store = configureStore({
    reducer:{
        user:userReducer,
        quran:quranReducer,
        adkar:adkarReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch