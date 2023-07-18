import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, switchMap } from "rxjs";
import { AuthorService } from "src/app/stores-services/author.service";
import { postAuthorAction, postAuthorFailure, postAuthorSuccess } from "./author.actions";
import { getAuthors } from "./author.actions";
import { setAllAuthors } from "./author.actions";
import { getAuthorsFailure } from "./author.actions";


@Injectable()
export class AuthorEffects {

  constructor(private actions$:Actions , private authorService:AuthorService) {}


   postAuthors$ = createEffect(():any=> {
   return this.actions$.pipe(
      ofType(postAuthorAction),
      switchMap(action => this.authorService?.onPostAuthor(action.postAuhtor)
        .pipe(
          map(() => {
           return postAuthorSuccess();
          }),
          catchError((error): any => {
           return postAuthorFailure({ error: error });
          })
        ))
    )
   })



   getAuthors$ = createEffect(():any=> {
    return this.actions$?.pipe(
      ofType(getAuthors),
      switchMap(() => {
       return this.authorService?.onGetAllAuthors()
        .pipe(
          map((data)=> {
            return  setAllAuthors({getAuhtors:data?.body})
          }),
          catchError((error):any => {
             return getAuthorsFailure({error:error})
          })
        )
      })
    )
   })


}


