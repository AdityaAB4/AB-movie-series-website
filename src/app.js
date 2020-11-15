// const path = require("path");
const { response } = require("express");
const express = require("express");
const request = require("request");
const movname = require("./utils/movname");
const url = "http://www.omdbapi.com/?s=bjk&apikey=9fba416a";

const name = process.argv[2];
console.log(process.argv);

if (!name) {
  return console.log("Please provide name to search the Movie or Series!");
} else {
  movname(name, (error, data) => {
    if (error) {
      return console.log(error);
    } else {
      console.log(data);
    }
  });
}

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Oops!!!Unable to connect...:(");
//   } else {
//     console.log(response.body.Search[0]);
//   }
// });

// const port = 80;
const path = require("path");
const { RSA_NO_PADDING } = require("constants");
const { title } = require("process");

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

const app = express();
const port = process.env.PORT || 80
const publicDirectoryPath = path.join(__dirname, "../public");
// app.get("/index", (req, res) => {
//   res.send("index.html");
// });

app.use(express.static(publicDirectoryPath));

app.get("/home", (req, res) => {
  if (!req.query.name) {
    return res.send({
      error: "Please provide a movie or series name!",
    });
  }

  movname(
    req.query.name,
    (error, { title, Year, imdbID, Type, Poster } = {}) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        title,
        Year,
        imdbID,
        Type,
        Poster,
      });
      });
    }
  );

  // res.send({
  //   title: 'Game of Thrones',
  //   Year: '2011–2019',
  //   name: req.query.name,
  // })


app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term!",
    });
  }
  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("*", (req, res) => {
  res.send("Oops!!! 404 Error....:(");
});

app.listen(port, () => {
  console.log(`The application started successfully on port${port}`);
});
