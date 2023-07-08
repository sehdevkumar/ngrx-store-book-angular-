import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpclientService } from './services/httpclient.service';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './stores-services/book.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bookReducer } from './stores/book.reducers';
import { BookEffects } from './stores/book.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      books: bookReducer,
    }),
    EffectsModule.forRoot([BookEffects])
  ],
  providers: [HttpclientService,BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
