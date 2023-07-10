import { GetAuthor, PostAuthor } from 'src/app/typings/api.typings';
import { createAction, props } from "@ngrx/store";



export const postAuthorAction = createAction(
  'Create Author',
   props<{postAuhtor:PostAuthor}>()
)

export const postAuthorFailure = createAction('Auhor Post Failed',props<{error:any}>())

export const postAuthorSuccess = createAction('Author Successfully Posted')


export const getAuthors = createAction('Get All Authors')

export const setAllAuthors  = createAction('Set All Authors',props<{authors:GetAuthor[]}>())

export const getAuthorsFailure = createAction('Auhor Get Failed',props<{error:any}>())


