import { ActionsTypes } from "../Constants/ActionsTypes";


const initialState = {
    movies: [],
    quantity :0,
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
            return state;
    }
    
}

// Add to card and Quatity reducers
export const AddMovieToCart = (state = initialState, action) => {
        switch (action.type) {
            case ActionsTypes.ADD_PRODUCT :
                return {...state, quantity: state.quantity+1, products:[...state.products,action.payload]};
            default : 
                return state;
        }

}
