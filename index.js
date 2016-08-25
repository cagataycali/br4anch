var async = require('async');
var E = require('3x3c');
var updateNotifier = require('update-notifier');
var pkg = require('./package.json');
updateNotifier({pkg}).notify();

module.exports = function () {
  return new Promise(function (resolve, reject) {
    E(`git symbolic-ref HEAD`)
      .then((value) => {resolve(value.split('/').pop(-1).trim())})
      .catch((err) => {reject(err)});
  });
}
