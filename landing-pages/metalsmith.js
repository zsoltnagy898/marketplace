/* eslint-env node */

const Metalsmith = require('metalsmith');
const inPlace = require('metalsmith-in-place');
const layouts = require('metalsmith-layouts');
const registerHelpers = require('metalsmith-register-helpers');
const getEnvironmentSettings = require('./getEnvironmentSettings');

const mode = process.env.NODE_ENV || 'production';
const env = getEnvironmentSettings(mode);

Metalsmith(__dirname)
  .source('src/site/pages/')
  .destination('dist/')
  .clean(mode !== 'development')
  .metadata({
    ...env,
    locale: 'en-GB',
    production: mode === 'production'
  })
  .use(
    registerHelpers({
      directory: 'src/site/helpers/'
    })
  )
  .use(
    layouts({
      engine: 'handlebars',
      directory: 'src/site/layouts/',
      partials: 'src/site/partials/',
      rename: true
    })
  )
  .use(
    inPlace({
      engine: 'handlebars'
    })
  )
  .build(err => {
    if (err) {
      throw err;
    }
  });
