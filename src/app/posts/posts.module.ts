import { NgModule } from '@angular/core';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    PostCreateComponent,
    PostsListComponent
  ],
  imports: [
    ReactiveFormsModule,
    AngularMaterialModule,
    CommonModule,
    AppRoutingModule
  ]
})

export class PostsModule {}
