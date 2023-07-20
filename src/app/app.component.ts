import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllBooks } from './stores/book/book.actions';
import { tabSelector } from './stores/tabs/tab.selectors';
import { Observable } from 'rxjs';
import { TabsInterface } from './typings/api.typings';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,OnDestroy{


  selectedTab:TabsInterface

  get getSelectedTab() {
     return this.selectedTab
  }

   constructor(private store:Store) {}



  ngOnInit(): void {
    this.onGetAllBooksData()

   this.store.select(tabSelector)
   .subscribe(res=> {
    this.selectedTab = res
   })
  }

  onGetAllBooksData() {
     this.store.dispatch(getAllBooks())
  }


  ngOnDestroy(): void {

  }
}


