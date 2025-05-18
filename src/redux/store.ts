import { configureStore } from "@reduxjs/toolkit";
import studentReducer from './slices/studentSlice'
import teacherReducer from './slices/teacherSlice'

const store = configureStore({
    reducer: {
        studentReducer,
        teacherReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch