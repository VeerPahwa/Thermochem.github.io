async function timer() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var day = currentTime.toString().split(" ")[0];
    var month = currentTime.toString().split(" ")[1];
    var date = currentTime.getDate();
    var d_str = day + ", " + month + ", " + date;
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var half;
    if (hours > 11) {
        half = " PM";
    } else {
        half = " AM";
    }
    if (hours > 12) {
        hours -= 12;
    }
    var t_str = hours + ":" + minutes + " " + half;
    document.querySelector('.time').innerHTML = t_str + "&nbsp;";
    document.querySelector('.date').innerHTML = "&nbsp;" + d_str;
    setTimeout(timer,1000);
}
async function updateWeather() {
    var response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=112ede2a91434ab6b02124158220706&q=Wilmington&days=1&aqi=no&alerts=no");
    const data = await response.json();
    console.log(data);
    var temp = Math.round(data["current"]["temp_f"]);
    var precip = data["forecast"]["forecastday"]["0"]["day"]["totalprecip_in"];
    var chance = data["forecast"]["forecastday"]["0"]["day"]["daily_chance_of_snow"]/100;
    var snow = precip * chance * 13;
    var snowchance = document.querySelector(".snowday");
    if (snow == 0) {
        snowchance.innerHTML = "Snowday: No Way!&nbsp;";
    } else if (snow > 5) {
        snowchance.innerHTML = "Snowday: &nbsp;Likely&nbsp;";
    }
    else {
        snowchance.innerHTML = "Snowday: Possible";
    }
    document.querySelector(".weather").innerHTML = "Temperature: " + temp + "°F";
    setTimeout(updateWeather,100000);
}
var max = 4;
var i = 1;
async function imageRotation() {
    if (i > max) {
        i = 1;
    }
    document.getElementById("folderimg").src = "images/" + i + ".jpg";
    i++;
    setTimeout(imageRotation,1000);
}
timer();
imageRotation(1);
updateWeather();
