/**
 * Include Gulp.
 */
const gulp = require( 'gulp' );

/**
 * Include Gulp Rename module for modifying file name.
 */
const gulpRename = require( 'gulp-rename' );

/**
 * Include module for Sass CSS compiler.
 */
const gulpSass = require( 'gulp-sass' ) ( require( 'sass' ) );

/**
 * Sass source file.
 */
const styleSrc = './src/scss/style.scss';

/**
 * Stylesheet directory.
 */
const styleDistDir = './dist/css/';

/**
 * Compiles stylesheet.
 */
const loadStyle = async () => {
    gulp.src( styleSrc )
    // Render CSS in minified form.
    .pipe( gulpSass( {
        errorLogToConsole: true,
        outputStyle: 'compressed'
    } ) )
    // Log errors in the console if any during the CSS rendering.
    .on( 'error', console.error.bind( console ) )
    // Add the ".min" suffix to the file name.
    .pipe( gulpRename( { suffix: '.min' } ) )
    .pipe( gulp.dest( styleDistDir ) );
};

/**
 * Create task to compile stylesheet.
 */
gulp.task( 'style', loadStyle );