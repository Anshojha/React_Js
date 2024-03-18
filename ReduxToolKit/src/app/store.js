import { configureStore } from "@reduxjs/toolkit";
import todoRedeucer from '../features/Todo/todoSlice';

export const store = configureStore({
    reducer:todoRedeucer
})