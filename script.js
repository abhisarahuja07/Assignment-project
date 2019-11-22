
  //Get Location
  //navigator.geolocation.getCurrentPosition(success, error);
  
  function success1() {
    var lat = document.getElementById('lat').value;
    console.log(lat);
    var long = document.getElementById('long').value;
    console.log(long);
    weather1(lat, long); 
  }
  
  function weather1(lat, long) {
    var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
    $.getJSON(URL, function(data){
      updateDOM1(data);
    });
  }
  
  
  function updateDOM1(data) {
    var city = data.name;
    var temp = Math.round(data.main.temp);
    var desc = data.weather[0].description;
    var icon = data.weather[0].icon;
    
    $("#city").html(city);
    $("#temp").html(temp);
    $("#desc").html(desc);
    $("#icon").attr("src", icon); 
    
  }

  function getcurrent()
  {
    navigator.geolocation.getCurrentPosition(success, error);
  }
  function success(pos) {
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    weather(lat, long); 
  }
  
  function error() {
    console.log('error');
  }
  
  function weather(lat, long) {
    var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
    $.getJSON(URL, function(data){
      updateDOM(data);
    });
  }
  
  
  function updateDOM(data) {
    var city = data.name;
    var temp = Math.round(data.main.temp);
    var desc = data.weather[0].description;
    var icon = data.weather[0].icon;
    
    $("#city").html(city);
    $("#temp").html(temp);
    $("#desc").html(desc);
    $("#icon").attr("src", icon); 
    
  }
  function gender()
  {
    var xhttp = new XMLHttpRequest();
    var userarray = {};
    var link = "https://genderapi.io/api/?name="+document.getElementById('name').value;
    xhttp.onreadystatechange=function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
          userarray = JSON.parse(this.responseText);
          document.getElementById('data').innerHTML = userarray.gender+" "+userarray.probability;
        }
    };
    xhttp.open("GET",link);
    //xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send();
    
  }