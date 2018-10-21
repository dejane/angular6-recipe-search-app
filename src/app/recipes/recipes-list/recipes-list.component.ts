import { RecipeService } from './../services/recipes.service';
import { Component, OnInit  } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styles: ['./recipes-list.component.scss']
})

export class RecipesListComponent implements OnInit {

  public recipes: object;
  public errorMsg: string;
  public breakpoint: number;
  public rowSize: string;
  public message: any;

  constructor(public _recipesService: RecipeService) { }

  ngOnInit() {

    this.onResize();

    this._recipesService.currentMessage.subscribe(message => this.recipes = message);

    this._recipesService.getRecipes()
      .subscribe(data => this.recipes = data,
                 error => this.errorMsg = error);
    }

  /**
  * Function get fier on windows resize, it changes row size and num of cols regarding windows size
  */
  @HostListener('window:resize', ['$event'])
      onResize() {
        this.breakpoint = (window.innerWidth <= 1000) ? 2 : 5;
        this.rowSize = (window.innerWidth <= 1000) ? '1:1.2' : '1:1';
  }

}
