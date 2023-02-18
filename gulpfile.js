const { task, dest, series, watch, src } = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const prefix = require('gulp-autoprefixer');

task('sass', () => {
    return src([
        'src/Styles/Sass/*.scss',
        'src/Components/**/**.scss',
        'src/Pages/**/**.scss'
        //'src/**.scss',
    ])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefix('last 4 versions'))
    .pipe(dest('src/Styles/Css'))
});

task('watch', () => {
    watch([
        'src/Styles/Sass/*.scss',
        'src/Components/**/**.scss',
        'src/Pages/**/**.scss',
        //'src/**.scss',
        
        'src/Components/**/**.tsx',
        'src/Pages/**/**.tsx',
        //'src/App.tsx',
    ],
    series('sass')
    )
})