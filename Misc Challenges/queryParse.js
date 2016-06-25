// Given a url with query strings,
// get all query params and values and return an object containg them.
// http://domain.com/q?=searchstring
// Not allowed to use Regex
// make into modudle for node. anyone can require and use it without modification to their code
// http://domain.com/examplequery?param1=value1&param2=value2&param3=value3
// reusability is important
// must be easy to understand (haha oops)
// handle edge cases - weird shit like unicode.
// example string: google.com/search?value=isearchedthis&othervalue=hello
// example encoded string: google.com%2Fsearch%3Fvalue1%3Dfoo%26value2%3Dbar%26value3%3Dbaz
const url = require('url');

class Parse {
  query(givenUrl) {
    return url.parse(decodeURIComponent(givenUrl)).search.substr(1).split('&')
    .map(i => i.split('='))
    .reduce((obj, val) => {
      obj[val[0]] = val[1]
      return obj;
    }, {});
  }
}

// const parse = new Parse;

// console.log(parse.query('google.com%2Fsearch%3Fvalue1%3Dfoo%26value2%3Dbar%26value3%3Dbaz'));

module.export = Parse;
