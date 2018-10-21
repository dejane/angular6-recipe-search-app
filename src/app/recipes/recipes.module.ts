import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeSearchComponent } from './recipes-search/recipes-search.component';
import { RecipeService } from './services/recipes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreloaderModule } from './../shared/preloader/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatListModule, MatSelectModule,   MatGridListModule } from '@angular/material';

@NgModule({

  declarations: [
    RecipesListComponent,
    RecipeSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatSelectModule,
    MatGridListModule,
    ReactiveFormsModule,
    PreloaderModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    RecipesListComponent,
    RecipeSearchComponent
  ],
  providers: [
    RecipeService
  ],
  bootstrap: [
     RecipesListComponent,
     RecipeSearchComponent
   ]
})
export class RecipesModule { }
