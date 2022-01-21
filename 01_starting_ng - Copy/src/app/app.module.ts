import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { RoundedDirective } from './rounded.directive';
import { RadiusedDirective } from './radiused.directive';
import { ElseDirective } from './else.directive';

@NgModule({
  declarations: [
    AppComponent,
    RoundedDirective,
    RadiusedDirective,
    ElseDirective,
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
