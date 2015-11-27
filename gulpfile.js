var gulp = require("gulp");
var shell = require("gulp-shell");
var browserify = require("browserify");
var watchify = require("watchify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var concat = require("gulp-concat");
var minifyCSS = require("gulp-minify-css");

var pathReference = {
    appEntryPoints: ["app/entryPoint.js"],
    buildJSFile: "app-build.js",
    buildCSSFile: "app-style.css",
    buildDir: "app/build",
    devCSSDir: "app/styling/**/*",
    cssStylingFrameworkSource: "node_modules/bootstrap/dist/css/bootstrap.min.css",
    cssStylingFrameworkBuild: "styling-framework.css",
    jsStylingFrameworkSource: "node_modules/bootstrap/dist/js/bootstrap.min.js",
    jsStylingFrameworkBuild: "styling-framework.js",
    jQueryFrameworkSource: "node_modules/jquery/dist/jquery.min.js",
    jQueryFrameworkBuild: "jquery.js",
    packageJson: "package.json"
};



gulp.task("createPrivateFiles", shell.task([
    "touch app/private/databaseSecrets.js app/private/appSecrets.js",
    "echo exports.databaseUri = '\"mongoose db uri goes here\";' > app/private/databaseSecrets.js",
    "echo exports.tokenSecret = '\"secret for jwt goes here\";' > app/private/appSecrets.js",
    "echo Remember to add private secrets before you run '\"npm test\"'"
]));

gulp.task("copyStylingFrameworksToBuild", shell.task([
    "cp " + pathReference.cssStylingFrameworkSource + " " + pathReference.buildDir + "/" + pathReference.cssStylingFrameworkBuild,
    "cp " + pathReference.jsStylingFrameworkSource + " " + pathReference.buildDir + "/" + pathReference.jsStylingFrameworkBuild
]));

gulp.task("copyJQuerySourceToBuild", shell.task([
    "cp " + pathReference.jQueryFrameworkSource + " " + pathReference.buildDir + "/" + pathReference.jQueryFrameworkBuild
]));

gulp.task("epr", shell.task([
    "node_modules/.bin/epr",
    "echo epr updated."
]));

gulp.task("minifyCSS", function() {
    gulp.src(pathReference.devCSSDir)
        .pipe(minifyCSS())
        .pipe(concat(pathReference.buildCSSFile))
        .pipe(gulp.dest(pathReference.buildDir));
    console.log("css minified.");
});

gulp.task("runRecurringServer", shell.task([
    "nodemon server.js"
]));

var browserifyConfig = browserify({
    entries: [pathReference.appEntryPoints],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
});

gulp.task("transformReactCode", function() {

    return browserifyConfig.bundle()
        .pipe(source(pathReference.buildJSFile))
        .pipe(gulp.dest(pathReference.buildDir));
});

gulp.task("watch", function() {

    gulp.watch(pathReference.devCSSDir, ['minifyCSS']);
    gulp.watch(pathReference.packageJson, ["epr"]);

    var watcher = watchify(browserifyConfig);

    return watcher.on("update", function() {
        watcher.bundle()
            .pipe(source(pathReference.buildJSFile))
            .pipe(gulp.dest(pathReference.buildDir));
        console.log("react code updated");
    })
        .bundle()
        .pipe(source(pathReference.buildJSFile))
        .pipe(gulp.dest(pathReference.buildDir));
});

gulp.task("test", shell.task([
    "nodemon node_modules/mocha/bin/mocha  --compilers js:babel-core/register  --watch app --watch test"
]));

gulp.task("setup", ["epr", "createPrivateFiles", "copyStylingFrameworksToBuild", "copyJQuerySourceToBuild", "minifyCSS", "transformReactCode"]);
gulp.task("develop", ["watch"]);
