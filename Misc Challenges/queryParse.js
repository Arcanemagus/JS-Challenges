// Given a url with query strings,
// get all query params and values and return an object containg them.
// Not allowed to use Regex
// Make into modudle for node.
// must be easy to understand (haha oops)
// handle unicode
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

module.exports = Parse;
