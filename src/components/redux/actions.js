import { createAction } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"


// ACTIONS
export const addItems = createAction('aad-item', item => ({
    payload:{
        ...item,
        id: nanoid(3)
    }
}))
export const delItems = createAction('delete-item')
export const changeFilter = createAction('filter')