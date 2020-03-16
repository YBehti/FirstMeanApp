import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  {path: '', component: PostsListComponent},
  {path: 'create', component: PostCreateComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: PostCreateComponent, canActivate: [AuthGuard]},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})

export class AppRoutingModule {

}
