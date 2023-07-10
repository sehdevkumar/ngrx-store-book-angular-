import { createReducer, on } from "@ngrx/store";
import { GetAuthor, PostAuthor } from "src/app/typings/api.typings";
import { getAuthors, getAuthorsFailure, postAuthorAction, postAuthorFailure, postAuthorSuccess, setAllAuthors } from "./author.actions";


export interface AuthorsState {
   getAuhtors: GetAuthor[],
   setAuthors: GetAuthor[],
   postAuthor:PostAuthor,
   error:any
}


const initialState:AuthorsState = {
  getAuhtors: [],
  setAuthors: [],
  postAuthor: undefined,
  error: undefined
}



export const authorReducers = createReducer(
 initialState,
 on(postAuthorAction,(state,{postAuhtor}) => ({...state, postAuthor:postAuhtor,error:null})),
 on(postAuthorFailure,(state,{error}) => ({...state, error:error})),
 on(postAuthorSuccess,(state) => ({...state,error:null})),

 on(getAuthors,(state) => ({...state,error:null})),
 on(getAuthorsFailure,(state,{error}) => ({...state, error:error})),
 on(setAllAuthors,(state,{authors}) => ({...state,authors:authors ,error:null})),

)
