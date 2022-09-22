
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"
// Types
const ADD_ITEMS = 'aad-item'
const DEL_ITEMS = 'delete-item'
const FILTER = 'filter'

// InitialState
const initialState = JSON.parse(localStorage.getItem('contacts'))|| []

// ACTIONS
export const addItems = createAction(ADD_ITEMS)
export const delItems = createAction(DEL_ITEMS)
export const changeFilter = createAction(FILTER)

// Reducers
const itemsReducer = createReducer(initialState, {
    [addItems] : (state, action) => [...state, ...action.payload],
    [delItems] : (state, action) =>  state.filter(item => item.userName !== action.payload)
})
const filterReducer = createReducer("", {
    [changeFilter] : (state, action) => action.payload
})


// Store
const store = configureStore({
    reducer: {
        items: itemsReducer,
        filter: filterReducer
    },
    contacts: {
      items: [],
      filter: ''
    },
    
})

export default store
