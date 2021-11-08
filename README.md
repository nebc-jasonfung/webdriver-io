# WebdriverIO


## Local Development

### Framework

These tests use [Webdriver.io](https://webdriver.io/) with the Jasmine framework.

### Prerequisite setup
Make sure you have the latest Npm and Node installed.
In some OS cases, when running the test for the first time, you may be prompted with further instructions to get
this set up correctly, in which case follow the detailed instructions for your OS [here](https://github.com/nodejs/node-gyp)

### Install project

```
npm intall
```

### Configure env

* `cp .env-example .env`
* Populate needed variables in `.env`

### Run locally

Make sure you have the correct `Chromedriver` version for your Chrome installed.
```
npm run wdio-local
```

### Run on TestingBot
```
npm run wdio
```