const request = require("request");

const poster = (Poster, callback) => {
  const url = "" + Poster;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect ..:(", undefined);
    } else if (body.error) {
      callback("Unable to find the movie poster!");
    } else {
      callback(undefined, data.Search[0].Poster);
    }
  });
};

module.exports = poster;
