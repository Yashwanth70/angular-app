import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Posts,PostComments } from './allPosts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
 })
};

@Injectable()
export class PostsFetchService {

  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private postsDetails = 'https://jsonplaceholder.typicode.com/posts/1';
  private postsCommentsUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.postsUrl,httpOptions);
  }

  getPostDetails(id): Observable<Posts> {
    return this.http.get<Posts>(this.postsUrl+'/'+id,httpOptions);
  }
  getPostComments(id): Observable<PostComments[]> {
    return this.http.get<PostComments[]>(this.postsUrl+'/'+id+'/'+'comments/',httpOptions);
  }

  constructor( private http: HttpClient) { }
}
