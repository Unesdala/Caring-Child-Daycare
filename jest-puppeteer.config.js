/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    setTimeout: 10000,
    launchTimeout: 150000,
    command: 'yarn build:prod && node server.js',
    port: process.env.PORT + 10,
  },
};
