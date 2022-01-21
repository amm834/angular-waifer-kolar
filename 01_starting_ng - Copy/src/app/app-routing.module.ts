import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PostComponent} from "./post/post.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {PostEditComponent} from "./post-edit/post-edit.component";
import {AboutGuard} from "./about.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent, canActivate: [AboutGuard]},
  {
    path: 'post/:id', component: PostComponent,
    children: [
      {path: '', component: PostDetailComponent},
      {path: 'post-edit', component: PostEditComponent},
      {path: 'post-detail', component: PostDetailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
