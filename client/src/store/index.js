import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { brinfStoreToSocket } from "../api";

const store = configureStore({ reducer: rootReducer });

brinfStoreToSocket(store);

export default store;
