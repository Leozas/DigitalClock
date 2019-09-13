let TimeNow = document.querySelector('.Time');

var IntervalTimer = setInterval(function() {

let TimeTextContent = new Date()

//setting dates
    let TimeStart = new Date(Date.now()).getTime();
    let TimeEnd = new Date('September 16, 2019 ').getTime();
    let TimeDifference = TimeEnd - TimeStart;

// converting milliseconds of TimeDifference into     
    let seconds = Math.floor((TimeDifference % (1000 * 60)) / 1000);
    let minutes = Math.floor((TimeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((TimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let days = Math.floor(TimeDifference / (1000 * 60 * 60 * 24));

// fixing single digit outputs
    function DoubleDigit(Number) {
        if (Number < 10) {
            return '0' + Number;
        } else {
            return Number;
        }
    }

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