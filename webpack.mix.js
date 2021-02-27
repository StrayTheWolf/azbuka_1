let mix = require('laravel-mix');

mix.browserSync('http://localhost:63342/azbuka/dist/index.html?_ijt=o0k61q8k7jjq0f2ds85lsgkfqs')

mix.sass('src/scss/main.scss', 'dist/css');
mix.js('src/scripts/script.js', 'dist/scripts/script-dist.js');
mix.js('src/scripts/topButton.js', 'dist/scripts/topButton-dist.js');

mix.copy('src/index.html', 'dist/index.html').options({processCssUrls : false});
mix.copyDirectory('src/images', 'dist/images');
