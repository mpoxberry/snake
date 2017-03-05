$(document).ready(function() {
   $(".dateFormat").click(function() {
        var date = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ampm = date.getHours() < 12 ? "am" : "pm";
        var t = date.getHours() + ":" + date.getMinutes() + ampm;
        
        return 
   })
});