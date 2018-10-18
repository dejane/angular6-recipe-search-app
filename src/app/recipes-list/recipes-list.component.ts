import { RecipeService } from './../services/recipes.service';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'recipes-list',
  templateUrl: './recipes-list.component.html',
  styles: []
})

export class RecipesListComponent implements OnInit {

  public recipes;
  public errorMsg;
  public breakpoint;
  public rowSize;

  message:any;

  constructor(public _recipesService:RecipeService) { }

  ngOnInit() {

    this.breakpoint = (window.innerWidth <= 1000) ? 2 : 5;
    this.rowSize = (window.innerWidth <= 1000) ? "1:1.2" : "1:1";

    this._recipesService.currentMessage.subscribe(message => this.recipes = message)

    this._recipesService.GetRecipes()
      .subscribe(data => this.recipes = data,
                 error => this.errorMsg = error);

  }

  onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 1000) ? 2 : 5;
  this.rowSize = (window.innerWidth <= 1000) ? "1:1.2" : "1:1";

  }


}
