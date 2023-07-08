import {getAllBooks } from './stores/book.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { BookState } from './stores/book.reducers';
import { selectGetBooks } from './stores/book.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

   constructor(private store:Store<BookState>) {}



  //  Get All Books Data
  ngOnInit(): void {
    this.onGetAllBooksData()

    this.store.pipe(select(appState=>  appState.getBooks)).subscribe(res=> {
      console.log(res)
    })
  }


  onGetAllBooksData() {
     this.store.dispatch(getAllBooks())

     this.store.pipe(select(selectGetBooks)).subscribe(res=> {
       console.log(res)
     })

  }


}


