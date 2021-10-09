import { ActionsTypes } from "../Constants/ActionsTypes";



const initialState = {
    movies: [],
};


// Reducers function takes two arguments state, action

//Movies Reducers
export const setMoviesReducers = (state = initialState, action) => {
    switch (action.type) {
        case ActionsTypes.SET_MOVIES:
            return {...state, movies: action.payload }
        default:
            return state;
    }
}

// single Movies Reducers
export const GetMovieDetailsReducers = (state={}, action) => {
    switch(action.type) {
        case ActionsTypes.GET_MOVIE : 
            return {...state, ...action.payload}
        case ActionsTypes.REMOVE_MOVIE : 
            return {};
        default : 
            return state
    }
    
}