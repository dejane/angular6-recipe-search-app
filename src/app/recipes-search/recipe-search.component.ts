import { RecipeService } from './../services/recipes.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})

@Injectable()
export class RecipeSearchComponent implements OnInit {

  message: any;
  page = 1;

  ingridentsControl = new FormControl();
  ingridiendtsList: string[] = ['garlic', 'olive oil', 'pepperoncini', 'tomato', 'onion', 'lettuce', 'chicken', 'eggs', 'potato'];

  constructor(private _recipesService: RecipeService) { }

  ngOnInit() { }

  getRecipesFromService(query, ingridients, page) {

    this._recipesService.GetRecipesWithParams(query, ingridients, page)
      .subscribe(
        data => this._recipesService.changeMessage(data)
      );
  }

  searchForRecipes(query, ingridients) {
    this.page = 1;
    ingridients = (ingridients) ? ingridients.toString() : '';
    this.getRecipesFromService(query, ingridients, this.page);
  }

  next(query, ingridients, page) {

    this.page = this.page + 1;
    ingridients = (ingridients) ? ingridients.toString() : '';
    this.getRecipesFromService(query, ingridients, this.page);
  }

  prev(query, ingridients, page) {

    this.page = this.page - 1;
    ingridients = (ingridients) ? ingridients.toString() : '';
    this.getRecipesFromService(query, ingridients, this.page);
  }

}
