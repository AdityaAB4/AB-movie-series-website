const request = require("request");
const movname = (name, callback) => {
  const url = "http://www.omdbapi.com/?s=" + name + "&apikey=9fba416a";

  request({ url: url, json: true }, (error, {body}) => {

    if (error) {
      callback("Unable to connect...:(",undefined);
    } else if (body.Error == "Movie not found!") {
      callback("Unable to connect.Try another search!",undefined);
    } else {
      callback(undefined, 
        {title :"Title   : " + body.Search[0].Title, 
        Year:  "Year : " + body.Search[0].Year,
        imdbID: "imdbID : " + body.Search[0].imdbID,
        Type: "Type : " + body.Search[0].Type,
        Poster: "PosterLink : " + body.Search[0].Poster,
        });
    }
  });
};
// movname("Avenger", (error, data) => {
//   //   console.log("Error", error);
//   console.log("Data", data);
// });

module.exports = movname;
