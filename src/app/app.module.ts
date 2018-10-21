import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PreloaderModule } from './shared/preloader/index.component';
import { RecipesModule } from './recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PreloaderModule,
    BrowserModule,
    RecipesModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ]

})
export class AppModule { }
