document.addEventListener('DOMContentLoaded', function() {
    // variable to track time
    let time = 0;

    // function to update elapsed time every second
    function updateTime() {
        // increment the time by 1 second
        time++;
        
        // update the HTML element with the elapsed time
        let timerDiv = document.querySelector('#timer');
        timerDiv.textContent = formatTime(time);
    }

    // creating the div for the elapsed time
    let timerDiv = document.createElement('div');
    timerDiv.id = 'timer'; // assign an ID to the div for easier selection
    document.body.appendChild(timerDiv); // append the div to the body of the document 

    // Start updating the elapsed time every second
    setInterval(updateTime, 1000);

    // Function to format time in minutes and seconds
    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;
        if (minutes === 1) {
            return "1 minute has passed";
        } else if (minutes > 1) {
            return `${minutes} minutes have passed`;
        } else {
            return `${seconds} seconds have passed`;
        }
    }
});
