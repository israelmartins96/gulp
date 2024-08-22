# Gulp 5 Template for Compiling Styles and Scripts + BrowserSync.
This task flow uses Gulp 5 and ESM format to compile Sass to CSS and scripts to browser-readable JavaScript.

## Description
The task flow watches for changes to `html`, `css`, `js`, and `php` files. Each change is synced with the browser by trigerring a refresh.

The `css` and `js` sourcemaps are loaded externally in the same respective directories as the bundled files.

- [gulp-rename](https://www.npmjs.com/package/gulp-rename) is used to add the ".min" suffix to the bundled file name.
- [gulp-sass](https://www.npmjs.com/package/gulp-sass) and [dart-sass](https://www.npmjs.com/package/sass) are used to compile `scss` to `css`, and minify the output `css` file.
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) is used to add CSS properties equivalents with browser vendor CSS prefixes.
- [browserify](https://www.npmjs.com/package/browserify) bundles the source scripts and modules into a single script.
- [babelify](https://www.npmjs.com/package/@types/babelify) compiles unsupported source JavaScript to a supported format in the bundled script.
The required Babel preset is `@babel/preset-env`.
- [vinyl-source-stream](https://www.npmjs.com/package/vinyl-source-stream) is used to write a temporary virtual copy of the bundled script to continue the task flow from.
- [vinyl-buffer](https://www.npmjs.com/package/vinyl-buffer) converts the temporary source stream created by `vinyl-source-stream` to a buffer.
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) is used to enable sourcemaps for the bundled script.
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) minifies the bundled script.
- [browser-sync](https://www.npmjs.com/package/browser-sync) synchronises file changes with the browser.

## Installation and Usage
1. Fork the repository.
2. Create a local clone of your forked repo.
3. The files and directories location can are stored in the `paths` object. Edit to match your file/directory structure.
4. Navigate to the root folder in the CLI and run `npm install` to install all the project's dependencies.
5. Run the `gulp` command in the CLI to test the successful installation. There should be no errors if the installation is successful.
6. All available tasks are stored in the `tasksList` object, which may be modified and referenced to run specific tasks in the CLI. E.g., `gulp js`.
An active task may be terminated with `CMD+C` or `Ctrl+C` (Windows). You most likely know that already ;)

## Credits
- [Alecaddd Gulpfile setup for Javascript ES6 compiling, plus SCSS, images, and fonts handling](https://github.com/Alecaddd/gulp-es6)