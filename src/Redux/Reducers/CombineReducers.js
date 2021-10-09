import {combineReducers} from "redux";
import { setMoviesReducers, GetMovieDetailsReducers} from "./MoviesReducers";


export const reducers = combineReducers({
    allMovies : setMoviesReducers,
    movie : GetMovieDetailsReducers,
});

