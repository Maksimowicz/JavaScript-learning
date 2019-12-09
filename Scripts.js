const DateIntervals ={
    SECONDS : "seconds",
    MINUTES : "minutes",
    HOURS : "hours",
    DAYS : "days"
}



function getDays(miliseconds)
{

}



function startDaysChecking(){
    document.getElementById("date-div").style.display = "block";
    document.getElementById("main-div").style.display = "none";
}



function checkDays(){
    var dateInnerString = document.getElementById("date-input").value;
    
    var dateInput = new Date(dateInnerString);
    var dateNow = new Date();

    var diff = dateNow - dateInput;
    console.log(typeof(diif));

    if(isNaN(diff))
    {
        console.log("NOT A NUMBER");
    }
 //   TimeUnit

    //var nowDate = new Date();
    //console.log("Date now: " + nowDate);

    //console.log(nowDate - date);

}