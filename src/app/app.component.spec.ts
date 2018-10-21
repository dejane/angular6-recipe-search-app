import { TestBed, async } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PreloaderModule } from './shared/preloader/index.component';
import { RecipesModule } from './recipes/recipes.module';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        PreloaderModule,
        BrowserModule,
        RecipesModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ ]
    }).compileComponents();
  }));

  /**
  * This unit test checks if app is created
  * @success: app is creted on load
  * @false: app is not created  on load
  */
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  /**
  * This unit test checks if page title is present
  * @success: if page title is present and the same it should be
  * @false: if page title is not present or is not the same as it should be
  */
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Recipes search app');
  }));

  /**
  * This unit test checks if page title is displayed in header
  * @success: if page title rendered in app html
  * @false: if page title is not present in app html or is not the same as it should be
  */
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Recipes search app');
  }));


});
