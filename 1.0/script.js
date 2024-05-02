document.addEventListener('DOMContentLoaded', function(){
    // Function to display "Keller" one character at a time
    function displayKeller(index) {
        // Define the text to be displayed
        var text = 'Keller';

        // Append the current character of "Keller" to the <h1> element
        document.querySelector('h1').textContent += text[index];
        
        // Check if there are more characters to display
        if (index < text.length - 1) {
            // If yes, set a timeout to call the function again after 1 second
            setTimeout(function(){
                displayKeller(index + 1);
            }, 1000);
        }
    }

    // Start displaying "Keller" by calling the function with an initial index of 0
    displayKeller(0);
});
