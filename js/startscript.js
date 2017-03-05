//var date = new Date();
var msg;

//Date Format
function dateFormat(date) {
    var date = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = days[date.getDay()];
    var thisDate = date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear();
    var ampm = date.getHours() < 12 ? "am" : "pm";
    var t = date.getHours() + ":" + date.getMinutes() + ampm;

    var o = t + " " + today + " " + thisDate;
    document.getElementById("clock").textContent = o;
    //greeting(date);
};

function greeting() {
    var date = new Date();
    var ampm = date.getHours() < 12 ? "am" : "pm";
    if (ampm === "am") {
        msg = "Top of the moring!";
    } else {msg = "Good night."}

    var s = msg;
    document.getElementById("greeting").textContent = s;
};