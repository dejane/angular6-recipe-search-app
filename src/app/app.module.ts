import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PreloaderModule } from './preloader/index.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeSearchComponent } from './recipes-search/recipe-search.component';
import { RecipeService } from './services/recipes.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatListModule, MatSelectModule,   MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeSearchComponent,
  ],
  imports: [
    PreloaderModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatSelectModule,
    MatGridListModule,
    ReactiveFormsModule,
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
