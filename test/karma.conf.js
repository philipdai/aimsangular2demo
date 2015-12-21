module.exports = function KarmaConfig(config) {
  var configuration = {
    basePath: '..',
    frameworks: ['browserify', 'jasmine'],
    files: [
      './app/**/*.spec.js'
    ],
    preprocessors: {
      './app/**/*.spec.js': ['browserify']
    },
    browsers: ['PhantomJS'],
    singleRun: true,
    autoWatch: false,
    browserify: {
      debug: true,
      paths: ['./node_modules', './app'],
      transform: [['babelify', {ignore: ['bower_components']}], 'partialify'],
      extensions: ['.js', '.html']
    }
  };

  config.set(configuration);
};
