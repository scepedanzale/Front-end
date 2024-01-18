import { createStore } from "redux";
import mainReducer from "../reducers";

const initialState = {
    favourites : []
}

export const store = createStore(mainReducer, initialState)