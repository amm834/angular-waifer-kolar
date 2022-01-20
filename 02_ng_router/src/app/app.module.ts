import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreService} from "./services/store/store.service";
import {PipingComponent} from './piping/piping.component';
import {SortPipe} from './pipes/sort/sort.pipe';
import {AddPipe} from './pipes/add/add.pipe';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import { BaseConverterComponent } from './base-converter/base-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    HomeComponent,
    PipingComponent,
    SortPipe,
    AddPipe,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    BaseConverterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StoreService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
