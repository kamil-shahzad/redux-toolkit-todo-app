import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './TaskSlices'
export default configureStore({
    reducer:{
        tasks: taskReducer
    }})