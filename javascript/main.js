let TimeNow = document.querySelector('.Time');

var IntervalTimer = setInterval(function() {

    let TimeTextContent = new Date();

    let TimeString = TimeTextContent.toLocaleString();

// Text Content Rendering
    TimeNow.textContent = TimeString;
    //days + ':' + hours + ':' + minutes + ':' + seconds;
 
// refreshing intervals    
    if (TimeDifference <= 0) {
        clearInterval(IntervalTimer);
    }
}, 1000);