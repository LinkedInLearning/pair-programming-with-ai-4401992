const postcssPresetEnv = require('postcss-preset-env');

const config = () => ({
  plugins: [
    postcssPresetEnv({
      features: {
        'custom-properties': true, // already enabled by default
        'custom-media-queries': true,
        'custom-selectors': true
      }
    }),
    require('autoprefixer'),
    require('postcss-nested')
  ]
});

module.exports = config;
