import {ActionsTypes} from "../Constants/ActionsTypes";



// create actions functions

export const setMovies = (movies)=> {
    return {
        type : ActionsTypes.SET_MOVIES,
        payload : movies,
    }
}