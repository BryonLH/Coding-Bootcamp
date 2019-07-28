axios = require("axios");
fs = require("fs");

function TV(search, term) {
  this.search = search;
  this.term = term;
}

TV.prototype.findShow = function() {
  axios
    .get(`http://api.tvmaze.com/singlesearch/shows?q=${this.term}`)
    .then(function(response) {
      //   console.log(response.data.rating);
      var res = response.data;
      var stuff = "</p>";
      var responseString = `Name: ${res.name}\n
Genres: ${res.genres}\n
Rating: ${res.rating.average}\n
Network: ${res.network.name}\n
Summary: ${res.summary.replace(/<p>/g, "")}`;
      fs.appendFile("./log.txt", responseString, function(error) {
        console.log(error);
      });
      console.log(responseString);
    })
    .catch(function(e) {
      console.log(e);
    });
};

TV.prototype.findActor = function() {
  axios
    .get(`http://api.tvmaze.com/search/people?q=${this.term}`)
    .then(function(response) {
      var res = response.data[0].person;
      var responseString = `Name: ${res.name}\n
birthday: ${res.birthday}\n
Gender: ${res.gender}\n
Country: ${res.country.name}\n
url: ${res.url}`;

      fs.appendFile("./log.txt", responseString, function(err) {
        console.log(err);
      });
      console.log(responseString);
    })
    .catch(function(e) {
      console.log(e);
    });
};

module.exports = TV;
