"use strict";

// Gulp Specific modules
const gulp = require("gulp"); // CSS Post Processor - caniuse.com
const rename = require("gulp-rename");
const concat = require('gulp-concat');
const child_process = require("child_process");
const browsersync = require("browser-sync").create();
// Javascript
const uglify = require('gulp-uglify');
// Others
var sourcemaps = require('gulp-sourcemaps');
// Gets the path to the jumbo-jekyll-theme
// var themePath = execSync('bundle show jumbo-jekyll-theme').toString().replace(/(\r\n|\n|\r)/gm, "");
// Javascript Sources
var package_javascript_sources = [
    "assets/js/vendor/modernizr.min.js",
    "assets/js/vendor/fastclick.js",
    "assets/js/vendor/lazysizes.js",
    "assets/js/vendor/ls.unveilhooks.js",
    "assets/js/vendor/what-input.min.js",
    "node_modules/foundation-sites/dist/js/foundation.min.js",
];
var app_javascript_sources = [
    "assets/js/app/**/*",
];
// javascript_sources = jekyllThemeSupport(javascript_sources);
const javascript_dest = "./_site/assets/js/";
// Add the Jekyll Theme base paths
function jekyllThemeSupport(sources) {
    sources.forEach(function (source) {
        let newSource = themePath + "/" + source;
        sources.push(newSource);
        console.log(newSource);
    });
    return sources;
}
// Build the Jekyll Site
function jekyll() {
    return child_process.spawn("bundle", ["exec", "jekyll", "build", "--profile", "--trace"], { stdio: "inherit" });
}
// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./_site/"
        },
        port: 4000
    });
    done();
}
// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}
// Concatenate & Minify Javascript
function package_script() {
    return (
        gulp
            .src(package_javascript_sources)
            .pipe(sourcemaps.init())
            .pipe(concat('package.js'))
            .pipe(gulp.dest(javascript_dest))
            .pipe(rename('package.min.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(javascript_dest))
    );
}
// Concatenate & Minify Javascript
function app_script() {
    return (
        gulp
            .src(app_javascript_sources)
            .pipe(sourcemaps.init())
            .pipe(concat('app.js'))
            .pipe(gulp.dest(javascript_dest))
            .pipe(rename('app.min.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(javascript_dest))
    );
}
// Watch files
function watchFiles() {
    gulp.watch("./assets/js/**/*", gulp.series(package_script, app_script));
    gulp.watch(
        [
            "./_includes/**/*",
            "./_layouts/**/*",
            "./_pages/**/*",
            "./_posts/**/*",
            "./assets/css/**/*",
            "./_data/**/*",
            "./_sass/**/*"
        ],
        gulp.series(jekyll, package_script, app_script, browserSyncReload)
    );
}
// Exports/Tasks
const js = gulp.series(package_script, app_script);
const build = gulp.series(jekyll, package_script, app_script);
exports.js = js;
exports.jekyll = jekyll;
exports.build = build;
exports.default = gulp.series(build, gulp.parallel(watchFiles, browserSync));
