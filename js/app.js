var zip = prompt('enter your location');

//for fun, later add an option to change readings to metric/imperial
//add background gif based on weather report
//OpenWeather API key: 71508cc7f491481b62c10bc291ed7007



$.ajax({
  method: "GET",
  url: "http://api.openweathermap.org/data/2.5/weather?q="+zip+"&units=imperial&appid=71508cc7f491481b62c10bc291ed7007",
    success: function(response){
      var getWeather = response;
      console.log(getWeather.main.temp);
      $('<div>').text(getWeather.name).appendTo('.location');
      $('<div>').text(Math.floor(getWeather.main.temp)).appendTo('.temp');
      $('<div>').text(getWeather.weather.main).appendTo('.conditions');
      $('<div>').text(Math.floor(getWeather.main.temp_min)).appendTo('.highTemp');
      $('<div>').text(Math.floor(getWeather.main.temp_max)).appendTo('.lowTemp');
    }
})
