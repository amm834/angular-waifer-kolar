import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from './home/home.component';
import {FormsModule} from "@angular/forms";
import {StoreService} from "./services/store/store.service";
import { PipingComponent } from './piping/piping.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import { AddPipe } from './pipes/add/add.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    HomeComponent,
    PipingComponent,
    SortPipe,
    AddPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    StoreService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
