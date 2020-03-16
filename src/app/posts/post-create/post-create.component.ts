import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { mimeType } from './mime-type.validator';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit, OnDestroy {
  private mode = 'create';
  private postId: string;
  post: Post;
  isLoading = false;
  form: FormGroup;
  imageUrl: string;
  private userId: string;
  private authStatusSub: Subscription;



  constructor(public postsService: PostsService, public route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(AuthStatus => {
      this.isLoading = false;
    });
    this.userId = this.authService.getUserId();
    this.form = new FormGroup({
      title: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      content: new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null, {validators: Validators.required, asyncValidators: [mimeType]})
    });
    this.isLoading = true;
    this.route.paramMap.subscribe(param => {
      if (param.has('id')) {
        this.mode = 'edit';
        this.postId = param.get('id');
        this.postsService.getPost(this.postId).subscribe(result => {
         this.post = {id: result.id, title: result.title, content: result.content, imagePath: result.imagePath, creator: this.userId};
         this.isLoading = false;
         this.form.setValue({title: result.title, content: result.content, image: result.imagePath});

        });
      } else {
        this.mode = 'create';
        this.postId = null;
        this.isLoading = false;
      }
    });

  }



  onSavePost() {

    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    const title = this.form.value.title;
    const content = this.form.value.content;
    const image = this.form.value.image;

    if (this.mode === 'create') {
      this.postsService.addPosts(title, content, image);
    }

    if (this.mode === 'edit') {
      this.postsService.updatePost(this.postId, title, content, image, this.userId);
    }


    this.form.reset();



  }

  onImagePicked(event) {
   const file = event.target.files[0];
   this.form.patchValue({image: file});
   this.form.get('image').updateValueAndValidity();
   const reader = new FileReader();
   reader.onload = () => {
     this.imageUrl = reader.result as string;
   }
   reader.readAsDataURL(file);



  }
  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }



}
