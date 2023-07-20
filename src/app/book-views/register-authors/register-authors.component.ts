import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs';
import { getAuthors, postAuthorAction, postAuthorSuccess } from 'src/app/stores/author/author.actions';
import { selectGetAuhtors, selectGetAuthorFailure, selectPostAuthor, selectPostAuthorSuccess } from 'src/app/stores/author/author.selectors';
import { PostAuthor } from 'src/app/typings/api.typings';

@Component({
  selector: 'app-register-authors',
  templateUrl: './register-authors.component.html',
  styleUrls: ['./register-authors.component.scss']
})
export class RegisterAuthorsComponent implements OnInit {

  authorForm:FormGroup

  constructor(private fb:FormBuilder, private store:Store){

       this.authorForm = fb.group({
         first_name: ['',Validators.required],
         last_name:['',Validators.required],
         email:['',Validators.required],
         about:['',Validators.required]
       })




  }
  ngOnInit(): void {
    this.store.dispatch(getAuthors())
    this.store.select(selectGetAuthorFailure).subscribe(res=> {
       console.log(res,'failure')
    })
  }


  onSubmit() {
    const payload:PostAuthor = this.authorForm?.value
    this.store.dispatch(postAuthorAction({postAuhtor:payload}))
    setTimeout(()=> {
      this.store.dispatch(getAuthors())
      this.authorForm.reset()
    },500)
  }

}
