let mix = require('laravel-mix');

mix.sass('src/scss/main.scss', 'dist/css');
mix.js('src/script.js', 'dist/script-dist.js');

mix.copy('src/index.html', 'dist/index.html');
mix.copyDirectory('src/images', 'dist/images');
