const days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
var today = new Date();
let day = days[today.getDay()];
document.getElementById("today").innerHTML = day;

setInterval(() => {
    var currentDate = new Date();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();
    var period = "AM";



    if (hour >= 12) {
        period = "PM";
    }

    if (hour > 12) {
        hour = hour - 12;
    }

    if (second < 10) {
        second = "0" + second;
    } 

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (hour < 10) {
        hour = "0" + hour;
    }


    var clockTime = hour + " : " + minute + " : " + second + " " + period;
    document.getElementById("A clock by Adwait").innerHTML = clockTime;

}, 1000);


