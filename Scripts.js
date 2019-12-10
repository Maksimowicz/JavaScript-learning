//Enum for specifing dateTime interval
const DateIntervals ={
    SECONDS : "seconds",
    MINUTES : "minutes",
    HOURS : "hours",
    DAYS : "days"
}

//Method to verify if given value is DateInterval
function checkIfDateInterval(intervalToCheck){
   var result = false;
   
   for(var intervalValue in DateIntervals)
   {
       if(DateIntervals[intervalValue] == intervalToCheck)
       {
           return true; //value found in dictionary
       }
   }

   return result;   
}

//Converts miliseconds to given time interval
function getTimeIntervalFromMiliseconds(miliseconds, interval = DateIntervals.SECONDS)
{
    //Check if parameters are proper
    if(!checkIfDateInterval(interval))
    {
        throw Error("Date interval is invalid!");     
    }

    if(isNaN(miliseconds))
    {
        throw Error("Passed parameter is not a number!");
    }

    switch(interval)
    {
        case DateIntervals.SECONDS:
            return (miliseconds/1000);
            break;
        case DateIntervals.MINUTES:
            return (miliseconds/60000); //1000*60
            break;
        case DateIntervals.HOURS:
            return (miliseconds/3600000);//1000*60*60
            break;
        case DateIntervals.DAYS:
            return (miliseconds/86400000); //1000*60*60*24
            break;
        default:
            throw Error("Wrong use of function.");
    }
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
    
    
    var daysAlive = getTimeIntervalFromMiliseconds(diff,DateIntervals.DAYS);
    var resultString = Math.trunc(daysAlive) + " days!";
    document.getElementById("result-p").innerHTML = resultString;
    document.getElementById("result-box").style.display = "block";
}

function reset(){
    document.getElementById("date-input").value = null;

    document.getElementById("result-box").style.display = "none";
    document.getElementById("date-div").style.display = "none";
    document.getElementById("main-div").style.display = "flex";
}