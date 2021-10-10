import {combineReducers} from "redux";
import { setMoviesReducers, GetMovieDetailsReducers, movieQuantityReducers} from "./MoviesReducers";


export const reducers = combineReducers({
    allMovies : setMoviesReducers,
    movie : GetMovieDetailsReducers,
    quantity : movieQuantityReducers,
});

