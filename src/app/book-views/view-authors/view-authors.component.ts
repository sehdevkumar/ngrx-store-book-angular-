import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, first, take, takeLast } from 'rxjs';
import { postAuthorSuccess, getAuthors } from 'src/app/stores/author/author.actions';
import { selectGetAuhtors } from 'src/app/stores/author/author.selectors';
import { GetAuthor } from 'src/app/typings/api.typings';

@Component({
  selector: 'app-view-authors',
  templateUrl: './view-authors.component.html',
  styleUrls: ['./view-authors.component.scss']
})
export class ViewAuthorsComponent implements OnInit {

  authorsList$:Observable<GetAuthor[]>

  constructor(private store:Store){}


  ngOnInit(): void {
    this.authorsList$ = this.store.pipe(select(selectGetAuhtors))
  }

}
