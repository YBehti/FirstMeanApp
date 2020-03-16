import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { map, findIndex } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.appUrl + 'posts/';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [];
  private postSubject = new Subject<{posts: Post[], postsCount: number}>();
  constructor(private http: HttpClient, private router: Router) { }

  getPosts(postsPerPage: number, currentPage: number ) {
    const queryParams = `?postsPerPage=${postsPerPage}&currentPage=${currentPage}`;
    this.http.get<{message: string, posts: any, postsCount: number}>(BACKEND_URL + queryParams)
    .pipe(map(postData => {
      return {
        posts: postData.posts.map(post => {
          return {
            id: post._id,
            title: post.title,
            content: post.content,
            imagePath: post.imagePath,
            creator: post.creator
          };
      }),
        postsCount: postData.postsCount};
    }))
    .subscribe((transformedData) => {
      console.log(transformedData);

      this.posts = transformedData.posts;
      this.postSubject.next({
        posts: [...this.posts],
        postsCount: transformedData.postsCount

      });
    });
  }

  getUpdatedPosts() {
   return this.postSubject.asObservable();
  }

  getPost(postId) {
    return this.http.get<{id: string, title: string, content: string, imagePath: string}>(BACKEND_URL + postId);
  }

  addPosts(title: string, content: string, image: File) {
    const postData = new FormData();
    postData.append('title', title);
    postData.append('content', content);
    postData.append('image', image, title);
    this.http.post<{message: string, post: Post}>(BACKEND_URL, postData).subscribe(
      () => {
        this.router.navigate(['/']);
      }
    );
  }

  updatePost(postId: string, title: string, content: string, image: string | File, creator: string) {
    let postData: Post | FormData;
    if (typeof image === 'object') {
      postData = new FormData();
      postData.append('id', postId);
      postData.append('title', title);
      postData.append('content', content);
      postData.append('image', image, title);
      postData.append('creator', creator);
    } else {
      postData = {id: postId, title, content, imagePath: image, creator};
    }

    this.http.put<{imagePath: string}>(BACKEND_URL + postId, postData )
    .subscribe(() => {
      this.router.navigate(['/']);

    });
  }

  deletePost(postId: string) {
    return this.http.delete(BACKEND_URL + postId);
  }


}
