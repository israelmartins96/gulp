/**
 * Using Gulp 5.
 */

/**
 * Modules.
 */
// Load Gulp.
import gulp from 'gulp';

// Include Gulp Rename module for modifying file name.
import rename from 'gulp-rename';

// Include modules for Sass CSS compiler.
import * as dartSass from 'sass';
import gulpSassModule from 'gulp-sass';

const gulpSass = gulpSassModule( dartSass );

// Include Gulp Autoprefixer module for adding CSS vendor prefixes.
import autoprefixer from 'gulp-autoprefixer';

/**
 * Stylesheets and JavaScript sources and destinations.
 */
// Sass source file.
const styleSrc = 'src/scss/style.scss';

// Destination stylesheet directory.
const styleDestination = './dist/css/';

// Style location to watch.
const styleWatch = 'src/scss/**/*.scss';

// Script location to watch.
const scriptWatch = 'src/js/**/*.js';

// Script source file.
const scriptSrc = 'src/js/script.js';

// Destination JavaScript directory.
const javaScriptDestination = './dist/js/';

/**
 * Tasks list.
 */
const tasksList = {
    default: 'default',
    style: 'style',
    js: 'js',
    watch: 'watch'
};

/**
 * Default tasks.
 */
const defaultTasks = [
    tasksList.style,
    tasksList.js
];

/**
 * Compiles stylesheet with sourcemap enabled.
 */
const loadStyle = async () => {
    gulp.src( styleSrc, { sourcemaps: true } )
    // Render CSS in minified form.
    .pipe( gulpSass( {
        errorLogToConsole: true,
        outputStyle: 'compressed'
    } ) )
    // Log errors in the console if any during the CSS rendering.
    .on( 'error', console.error.bind( console ) )
    // Add browser vendor CSS prefixes.
    .pipe( autoprefixer( {
        cascade: false
    } ) )
    // Add the ".min" suffix to the file name.
    .pipe( rename( { suffix: '.min' } ) )
    // Render the CSS file in the CSS directory with external sourcemaps.
    .pipe( gulp.dest( styleDestination, { sourcemaps: '.' } ) );
};

/**
 * Compiles JavaScript.
 */
const loadJavaScript = async () => {
    gulp.src( scriptSrc )
    // Render the JavaScript file in the destination directory.
    .pipe( gulp.dest( javaScriptDestination ) );
};

/**
 * Watches for specified tasks.
 */
const doWatch = () => {
    // Watch for style update.
    gulp.watch( styleWatch, loadStyle );
    // Watch for script update.
    gulp.watch( scriptWatch, loadJavaScript );
};

/**
 * Task to compile stylesheet.
 */
gulp.task( tasksList.style, loadStyle );

/**
 * Task to compile JavaScript.
 */
gulp.task( tasksList.js, loadJavaScript );

/**
 * Task to run default tasks.
 */
gulp.task( tasksList.default, gulp.parallel( defaultTasks ) );

/**
 * Task to watch for file changes.
 */
gulp.task( tasksList.watch, doWatch );