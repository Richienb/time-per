# Times per timeframe [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/time-per/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/time-per)

Assuming an operation was completed a specific amount of times in a timeframe, calculate the operations on average that were completed every specified unit of time.

[![NPM Badge](https://nodei.co/npm/time-per.png)](https://npmjs.com/package/time-per)

## Install

```sh
npm install time-per
```

## Usage

```js
const timePer = require("time-per")

const timesPressed = 2
const secsPassed = 15

`User will press the button ${timePer(timesPressed, secsPassed, 60)} per minute`
//=> "User will press the button 8 times per minute"
```

## API

### timePer(num, time, est)

#### num

Type: `number`

The amount of times the operation was completed.

#### time

Type: `number`

The amount of time it took for all the operations to complete.

#### est

Type: `number`

The units of time to estimate the operation amount for.
