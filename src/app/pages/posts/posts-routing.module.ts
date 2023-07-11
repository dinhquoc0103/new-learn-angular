import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCatalogComponent } from './post-catalog/post-catalog.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { isLoggedGuardFn } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: PostCatalogComponent },
  { path: ':id', component: PostDetailComponent, canActivate: [isLoggedGuardFn] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
