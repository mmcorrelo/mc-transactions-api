const gulp = require('gulp');
const run = require('gulp-run');
const gulpClean = require('gulp-clean');
const replace = require('gulp-replace');

function clean() {
    console.log("Start cleaning old builds.");
    return gulp.src('build', { read: false, allowEmpty: true })
        .pipe(gulpClean())
}

function getVersion() {
    const index = process.argv.indexOf('--releaseVersion');
    return process.argv[index + 1];
}

function runWebpack() {
    console.log("Start building server with webpack.");
    return run('npx webpack').exec();
}

function version() {
    const releaseVersion = getVersion();

    if (releaseVersion) {
        console.log("Release version is " + releaseVersion);
        return gulp.src('package.json')
            .pipe(replace(/(\"version\"\s*:\s*\"\d+\.\d+\.\d+)(\"|\-SNAPSHOT\")/,
                '"version' + '": "' + releaseVersion + '"'))
            .pipe(gulp.dest('./', { overwrite: true }))
    } else {
        console.log("version: Version is not send as buildw arguments");
        throw new Error("version: Version is not send as buildw arguments");
    }
}

function copyPackageJson() {
    console.log("Copying package.json file to build directory.");
    gulp.src('build/index.js.map', { read: false }).pipe(gulpClean());

    return gulp.src('package.json').pipe(gulp.dest('build/'));
}

function copyCertificates() {
    console.log("Copying certificates...");
    gulp.src('certificates/certificate.crt').pipe(gulp.dest('build/'))
    gulp.src('certificates/private.key').pipe(gulp.dest('build/'))
    return gulp.src('certificates/A1C1D15E94C07F8BA8A1762F2F81BF4C.txt').pipe(gulp.dest('build/'))
}

function installingDependencies() {
    process.env.NODE_ENV = "production";
    process.chdir('build/');
    console.log("Running npm install to fetch bundle dependencies.");
    return run('npm install').exec();
}

function packageFiles() {
    console.log("Packaging deployment file.");
    return run('npm pack').exec();
}


const build = gulp.series(runWebpack, version, copyCertificates, copyPackageJson, installingDependencies, packageFiles);

exports.build = build;
exports.clean = clean;
exports.default = gulp.series(clean, build);