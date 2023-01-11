import { createSlice } from "@reduxjs/toolkit";
export const taskSlices = createSlice({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: new Date(),
                name: action.payload.task
            }
            state.push(newTask)
        },
        deleteTask: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        }

    }

}
);

export const { addTask, deleteTask } = taskSlices.actions;
export default taskSlices.reducer