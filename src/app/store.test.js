import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import taskReducer from "../features/tasks/taskSlice"

describe("store", () => {
    test("checks if the reducers are valid or not", () => {
        const store = configureStore({
            reducer: {
                auth: authReducer,
                tasks: taskReducer
            }
        })

        const storeReducers = store.getState()

        expect(storeReducers).toHaveProperty("auth")
        expect(storeReducers).toHaveProperty("tasks")
    })
})
