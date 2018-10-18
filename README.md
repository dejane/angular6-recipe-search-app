# Recipes search app

Create a web application in Angular (6) that enables users to find recipes based on ingredients/course names. Use this API to get all the information: http://www.recipepuppy.com/about/api/

## Local enviroment

Use `npm install` and then `npm start` for running.

`npm start` command executes: `ng serve --proxy-config=proxy.conf.json` since we are using proxy server for making http requests.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod --base-href url` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
