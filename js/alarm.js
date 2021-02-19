function checkAlarm() {
    var now = new Date();
    var month = now.getMonth();        // month 
    var dayOfMonth = now.getDate();   //dayOfMonth 
    var dayOfWeek = now.getDay();     //dayOfWeek
    var sleep;
    var alert = sleep;
    // using if statement going to input all holiday that user can "sleep in "  
    // with else statements and other all days will be " Get up"
    if ( month == 0 && dayOfMonth == 1 || month == 6 && dayOfMonth == 4 || month == 11 && dayOfMonth == 4 || dayOfWeek == 0 && dayOfWeek == 6 ) {
        
        alert = "You are allowed to 'Sleep in' today ";   
    }
    else {

        alert = "Sorry You are not allowed to sleep Please 'get up' for work" ;
    }
        
          document.getElementById("outputDiv").innerHTML = alert;
        }