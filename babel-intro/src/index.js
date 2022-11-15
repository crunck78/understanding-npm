const moment = require("moment");
const semver = require("semver");

console.log(semver.valid("1.0.0"));

const day = moment().format("dddd");
console.log(day);