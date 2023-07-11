import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { isLoggedGuardLoadFn } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) }
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
      { path: 'posts', loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule) },
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: async () => (await import('./pages/admin/admin.module')).AdminModule,
        // canLoad: [isLoggedGuardLoadFn]
      }
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/errors/errors.module').then(m => m.ErrorsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
