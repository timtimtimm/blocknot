import { configureStore } from "@reduxjs/toolkit";
import contentReduser from './sliceContent';

export default configureStore({
    reducer: {
        blocnot: contentReduser,
    }
});