var axios = require('axios');

//generate base URL
//const cannot be altered
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f1c5a1ba5398154f106114999e636d88&units=imperial';

// f1c5a1ba5398154f106114999e636d88

module.exports = {
  getTemp: function (location) {
    //build URL - template strings with back tick
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    //chain promises to pass along data using return
    return axios.get(requestURL).then(function (res) {
      //debugger;
      if (res.data.cod && res.data.message) {
        throw new Error('Unable to fetch weather.');
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error('Unable to fetch weather.');
    });
  }
}
