const request = require('request');

module.exports = (url, done) => {
  request(url, (err, response, body) => {
    //response is not used, why?
    if (err) {
      done(err);
    } else {
      done(body);
    }
  });
};
