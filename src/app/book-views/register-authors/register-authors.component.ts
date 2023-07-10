import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { postAuthorAction } from 'src/app/stores/author/author.actions';
import { selectGetAuthorFailure, selectPostAuthor } from 'src/app/stores/author/author.selectors';
import { PostAuthor } from 'src/app/typings/api.typings';

@Component({
  selector: 'app-register-authors',
  templateUrl: './register-authors.component.html',
  styleUrls: ['./register-authors.component.scss']
})
export class RegisterAuthorsComponent {

  authorForm:FormGroup

  constructor(private fb:FormBuilder, private store:Store){

       this.authorForm = fb.group({
         first_name: ['',Validators.required],
         last_name:['',Validators.required],
         email:['',Validators.required],
         about:['',Validators.required]
       })


       this.onInitStoreSubscription()

  }


  onSubmit() {
    const payload:PostAuthor = this.authorForm?.value
    this.store?.dispatch(postAuthorAction({postAuhtor:payload}))
  }


  onInitStoreSubscription() {
     this.store.select(selectPostAuthor)?.subscribe(res=> {
        console.log(res)
     })
  }

}
