
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IRecipe } from './../recipe';
import { tap, catchError } from 'rxjs/operators';
import { HttpParams } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RecipeService {

  private _url: string = "http://ng.prod.digiapps.de/proxy.php";
  //private _url: string = "/api";

  constructor(private http:HttpClient) { }

  GetRecipes(): Observable<IRecipe[]>{

    return this.http.get<IRecipe[]>(this._url)
                    .pipe(tap(data => data) , catchError(this.errorHandler))
  }

  GetRecipesWithParams(query, ingridients, page): Observable<IRecipe[]>{

    const params = new HttpParams().set('q', query).set('i', ingridients).set('p', page);

    return this.http.get<IRecipe[]>(this._url, {params})
                    .pipe(tap(data => data) , catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: any) {
    this.messageSource.next(message)
  }

}
