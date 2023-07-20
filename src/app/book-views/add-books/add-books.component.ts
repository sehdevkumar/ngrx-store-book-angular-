import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllBooks } from 'src/app/stores/book/book.actions';
import { selectGetBooks } from 'src/app/stores/book/book.selectors';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {


  constructor(private store: Store) {

  }



  ngOnInit(): void {
      this.store.select(selectGetBooks).subscribe(res=> {
         console.log(res)
      })
  }

}
