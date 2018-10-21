import { Component } from '@angular/core';
import { LoaderService } from './shared/preloader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Recipes search app';

  constructor(public loaderService: LoaderService) { }
}
