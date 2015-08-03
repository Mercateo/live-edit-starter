# live-edit-starter

> A starter template which shows how to get live editing features for CSS, HTML and JS.

This starter template uses Gulp and supports

- Babel compilation with Source Maps
- Less compilation with Source Maps
- live editing for CSS with [browser-sync](https://github.com/Browsersync/browser-sync) and for HTML with [bs-html-injector](https://github.com/shakyShane/html-injector)
- live editing for JS with [fb-flo](https://github.com/facebook/fb-flo)

## Install

1. Clone this repository.
2. Install all dependencies with `$ npm install`.
3. Install the [fb-flo Chrome extension](https://github.com/facebook/fb-flo#2-install-the-chrome-extension) and [activate fb-flo](https://github.com/facebook/fb-flo#3-activate-fb-flo).


## Usage

Run `$ npm start` or `$ gulp` and to build the app and start our server. You can now visit [http://localhost:3000/](http://localhost:3000/). Try to change the `src/index.html`, `src/style.less` or `src/app.es6` - everything should change without a browser refresh!

## Known Bugs

There is one known bug in fb-flo: if live editing doesn't work [try to visit the "Sources" tab of Chrome Dev tools _once_](https://github.com/facebook/fb-flo/issues/86).
