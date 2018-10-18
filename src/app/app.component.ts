import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from './preloader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipes search app';

  constructor(public loaderService: LoaderService, private http: HttpClient) {
  }

}
