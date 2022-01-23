import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PostComponent} from "./post/post.component";
import {AboutGuard} from "./about.guard";
import {PostEditGuard} from "./post-edit.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent, canActivate: [AboutGuard]},
  {
    path: 'post/:id', component: PostComponent, canDeactivate: [PostEditGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
