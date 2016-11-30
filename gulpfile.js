const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.copy('bower_components/components-font-awesome/fonts', 'public/assets/fonts');
    mix.styles([
        'bower_components/components-font-awesome/css/font-awesome.css',
        'resources/css/normalize.css',
        'resources/css/skeleton.css',
        'resources/css/grid24.css',
        'bower_components/bxslider/bx_styles/bx_styles.css',
        'bower_components/fancybox/source/jquery.fancybox.css',
        'resources/css/layout.css',
        'resources/css/menu.css'
    ], 'public/assets/css/app.css', './');
    mix.scripts([
        'bower_components/jquery-1.12.4/index.js',
        'bower_components/html5shiv/dist/html5shiv.js',
        'bower_components/bxslider/source/jquery.bxSlider.js',
        'bower_components/fancybox/source/jquery.fancybox.js',
        'vendor/jquery.rwdimagemaps/jquery.rwdImageMaps.js',
        'resources/js/googlemaps.js',
        'resources/js/parallax.js',
        'resources/js/functions.js'
    ], 'public/assets/js/app.js', './');
});
