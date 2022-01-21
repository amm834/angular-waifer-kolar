import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ImageListComponent} from './gallery/image-list/image-list.component';
import {ImageComponent} from "./gallery/image-list/image/image.component";
import {ImageDetailComponent} from './gallery/image-detail/image-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
