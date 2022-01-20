import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {PipingComponent} from "./piping/piping.component";
import {TemplateDrivenFormComponent} from "./template-driven-form/template-driven-form.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
import {BaseConverterComponent} from "./base-converter/base-converter.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'piping',
    component: PipingComponent
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent
  }, {
    path: 'reactive-form',
    component: ReactiveFormComponent
  }, {
    path: 'base-converter',
    component: BaseConverterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
