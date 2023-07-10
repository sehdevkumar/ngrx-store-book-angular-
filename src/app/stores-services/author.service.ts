import { Injectable } from '@angular/core';
import { HttpclientService } from '../services/httpclient.service';
import { PostAuthor } from '../typings/api.typings';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpclientService) { }



  onPostAuthor(paylod:PostAuthor) {
     return this.http.request('post','authors/',null,paylod)
  }


  onGetAllAuthors() {
     return this.http.request('get','authors/')
  }

}
