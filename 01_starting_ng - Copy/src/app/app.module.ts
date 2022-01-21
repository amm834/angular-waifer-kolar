import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { RoundedDirective } from './rounded.directive';
import { RadiusedDirective } from './radiused.directive';

@NgModule({
  declarations: [
    AppComponent,
    RoundedDirective,
    RadiusedDirective,
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
