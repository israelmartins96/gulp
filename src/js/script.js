/**
 * Import App.
 */
import App from './modules/app';

import $ from 'jquery';

const app = new App();

$( 'h1' )
.on( 'click', () => {
    console.log( 'jQuery event handler!' );
} );