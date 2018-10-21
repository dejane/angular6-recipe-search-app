import { throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IRecipe } from './../recipe';
import { tap, catchError } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RecipeService {

  private url = 'http://ng.prod.digiapps.de/proxy.php';  // api endpoint
  private messageSource = new BehaviorSubject( {} );
  public currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  /**
  * Observable function
  */
  getRecipes(): Observable<IRecipe[]> {

    return this.http.get<IRecipe[]>(this.url)
                    .pipe(tap(data => data) , catchError(this.errorHandler));
  }

  /**
  * Function that create request to backend and get new data
  * @param query search query string @param ingridients ingridient list string @param page number on of page
  */
  getRecipesWithParams(query, ingridients, page): Observable<IRecipe[]> {

    const params = new HttpParams().set('q', query).set('i', ingridients).set('p', page);

    return this.http.get<IRecipe[]>(this.url, {params})
                    .pipe(tap(data => data) , catchError(this.errorHandler));
  }

  /**
  * ErrorHandler for observable
  */
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }

  /**
  * This function send new data to every subscriber
  */
  changeMessage(message: object) {
    this.messageSource.next(message);
  }

}
