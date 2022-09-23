import { createReducer } from "@reduxjs/toolkit"
import { addItems, delItems, changeFilter } from "./actions"
import { combineReducers } from "redux"

const initialState =  []

// Reducers
export const itemsReducer = createReducer(initialState, {
    [addItems] : (state, action) => [...state, action.payload],
    [delItems] : (state, action) =>  state.filter(item => item.userName !== action.payload)
})

export const filterReducer = createReducer("", {
    [changeFilter] : (state, action) => action.payload
})

export const rootReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer
})

