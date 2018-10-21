import { RecipeService } from './../services/recipes.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-recipes-search',
  templateUrl: './recipes-search.component.html',
  styleUrls: ['./recipes-search.component.scss']
})

@Injectable()
export class RecipeSearchComponent implements OnInit {

  public message: object;
  public page = 1;
  public ingridentsControl = new FormControl();
  public ingridiendtsList: string[] = ['garlic', 'olive', 'pepperoncini', 'tomato', 'onion', 'lettuce', 'chicken', 'eggs', 'potato'];

  constructor(private _recipesService: RecipeService) { }

  ngOnInit() { }

  /**
  * Function call recipe.service and get new search results
  * * @param query search query string @param ingridients ingridient list string @param page number on of page
  */
  getRecipesFromService(query, ingridients, page) {

    this._recipesService.getRecipesWithParams(query, ingridients, page)
      .subscribe(
        data => this._recipesService.changeMessage(data)
      );
  }

  /**
  * Function get called on search button click
  * @param query search query string @param ingridients ingridient list string
  */
  searchForRecipes(query, ingridients) {
    this.page = 1;
    ingridients = (ingridients) ? ingridients.toString() : '';
    this.getRecipesFromService(query, ingridients, this.page);
  }

  /**
  * Function get called on next page button click
  * @param query search query string @param ingridients ingridient list string
  */
  nextPage(query, ingridients) {

    this.page = this.page + 1;
    ingridients = (ingridients) ? ingridients.toString() : '';
    this.getRecipesFromService(query, ingridients, this.page);
  }

  /**
  * Function get called on previous page button click
  * @param query search query string @param ingridients ingridient list string
  */
  prevPage(query, ingridients) {

    this.page = this.page - 1;
    ingridients = (ingridients) ? ingridients.toString() : '';
    this.getRecipesFromService(query, ingridients, this.page);
  }

}
