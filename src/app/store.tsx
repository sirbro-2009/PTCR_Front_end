import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/crud_account_setting/crud_slice";
import quranReducer from "@/features/quran/quran_slice";
export const store = configureStore({
    reducer:{
        user:userReducer,
        quran:quranReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch