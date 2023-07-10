import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs";
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
      mergeMap(action => {
       return this.authorService?.onPostAuthor(action.postAuhtor)
        .pipe(
          map(()=> {
               postAuthorSuccess()
          }),
          catchError((error):any => {
              postAuthorFailure({error:error})
          })
        )
      })
    )
   })



   getAuthors$ = createEffect(():any=> {
    return this.actions$.pipe(
      ofType(getAuthors),
      mergeMap(action => {
       return this.authorService?.onGetAllAuthors()
        .pipe(
          map((data)=> {
              setAllAuthors({authors:data?.body})
          }),
          catchError((error):any => {
              getAuthorsFailure({error:error})
          })
        )
      })
    )
   })





}
