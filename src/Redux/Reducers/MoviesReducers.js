import { ActionsTypes } from "../Constants/ActionsTypes";



const initialState = {
    movies: [],
};


// Reducers function takes two arguments state, action
export const setMoviesReducers = (state = initialState, action) => {
    switch (action.type) {
        case ActionsTypes.SET_MOVIES:
            return {...state, movies: action.payload }
        default:
            return state;
    }
}