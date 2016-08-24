var async = require('async');
var E = require('3x3c');

module.exports = function () {
  return new Promise(function (resolve, reject) {
    E(`git symbolic-ref HEAD`)
      .then((value) => {resolve(value.split('/').pop(-1))})
      .catch((err) => {reject(err)});
  });
}
