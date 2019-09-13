let TimeNow = document.querySelector('.Time');

var IntervalTimer = setInterval(function() {

    let TimeTextContent = new Date()

    let TimeSubString1 = TimeTextContent.substring(4,6)

    TimeTextContent = TextSubString1

// setting proper double digits 
    seconds = DoubleDigit(seconds);
    minutes = DoubleDigit(minutes);
    hours = DoubleDigit(hours);
    days = DoubleDigit(days);

// Text Content Rendering
    TimeNow.textContent = TimeTextContent
    //days + ':' + hours + ':' + minutes + ':' + seconds;
 
// refreshing intervals    
    if (TimeDifference <= 0) {
        clearInterval(IntervalTimer);
    }
}, 1000);