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
 * Stylesheets.
 */
// Sass source file.
const styleSrc = './src/scss/style.scss';

// Stylesheet directory.
const styleDistDir = './dist/css/';

/**
 * Compiles stylesheet.
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
    // Render the CSS file in the CSS directory. Sourcemaps.
    .pipe( gulp.dest( styleDistDir, { sourcemaps: '.' } ) );
};

/**
 * Create task to compile stylesheet.
 */
gulp.task( 'style', loadStyle );