import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { PageEvent, MatPaginator } from '@angular/material';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {



  constructor(public postsService: PostsService, private authService: AuthService) { }


  storedPosts: Post[] = [];
  private postSub: Subscription;
  isLoading = false;
  totalPosts = 100;
  postsPerPage = 2;
  currentPage = 1;
  postsPerPageOptions = [2, 5, 10];
  userIsAuthenticated = false;
  authListenerSubs: Subscription;
  userID: string;







  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts(this.postsPerPage, this.currentPage);
    this.postSub =  this.postsService.getUpdatedPosts()
    .subscribe((postsData: {posts: Post[], postsCount: number}) => {
      this.storedPosts = postsData.posts;
      this.totalPosts = postsData.postsCount;
      this.isLoading = false;
    } );
    this.userIsAuthenticated = this.authService.getAuth();
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
    this.userID = this.authService.getUserId();
  }

  onPageChange(event: PageEvent) {
    this.isLoading = true;
    this.postsPerPage = event.pageSize;
    this.currentPage = event.pageIndex + 1;
    this.postsService.getPosts(this.postsPerPage, this.currentPage);
    console.log(event);


  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId).subscribe(() => {
      this.postsService.getPosts(this.postsPerPage, this.currentPage);
    });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
    this.authListenerSubs.unsubscribe();
  }
}
