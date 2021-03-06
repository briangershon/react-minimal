# react-minimal

React with minimal dependencies and tools.

![Build Status](https://github.com/briangershon/react-minimal/workflows/Continuous%20Integration/badge.svg)

* Includes a development environment with:
  * Support for es6 modules and hot reloading (via Parcel Bundler)
  * Compile to es5 to run across a wide range of browsers (via Babel)
  * Unit tests (via Jest)
  * Lint (via ESLint Airbnb style)
  * Continuous Integration workflow with Github Actions

* Styling with default fonts that look great across operating systems.

## Run Local Dev Server

    npm install  # install dependencies

    npm start
    # visit http://localhost:1234

## Run Tests

    npm test

## Package project up in dist folder for release to server

    npm run build
