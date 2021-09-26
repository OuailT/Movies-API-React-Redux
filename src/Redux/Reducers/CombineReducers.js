import {combineReducers} from "redux";
import { setMoviesReducers } from "./MoviesReducers";


export const reducers = combineReducers({
    allMovies : setMoviesReducers,
});

