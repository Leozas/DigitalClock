let TimeNow = document.querySelector('.Time');

var IntervalTimer = setInterval(function() {

    let TimeTextContent = new Date();

    let TimeString = TimeTextContent.toLocaleString();

// Text Content Rendering
    TimeNow.textContent = TimeString;
 
}, 1000);