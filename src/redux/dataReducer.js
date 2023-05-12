import {GET_DATA_SUCCESS } from "./constant"

export const servicesData = (data = [], action) => {
    switch (action.type) {
            case GET_DATA_SUCCESS:
                return [...action.data]
        default:
            return data
    }
}