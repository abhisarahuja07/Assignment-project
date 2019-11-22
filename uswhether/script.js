// Get weather by city; onclick

$("#btn").click(function(){ 
var city = $("#city").val();
  var xhttp = new XMLHttpRequest();
    var data = {};
    var link = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b"
    xhttp.onreadystatechange=function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
          data = JSON.parse(this.responseText);
            var temp = data.main.temp;
            var humidity = data.main.humidity;
            var speed = data.main.speed;
            var description = data.weather[0].description;
            $("#city").html(city);
            $("#temp").html(temp);
            $("#humidity").html(humidity);
            $("#speed").html(speed);
            $("#description").html(description);
        }
    };
    xhttp.open("GET",link);
    //xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send();

});