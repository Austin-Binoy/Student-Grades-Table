// Select all input fields
const inputFields = document.querySelectorAll('.inputField');
// Select the output box
const outputBox = document.getElementById('outputBox');

// Function to calculate the average
function calculateAverage() {
    let sum = 0;
    let count = 0;
    inputFields.forEach(input => {
        // Check if the input has a value
        if (input.value) {
            sum += parseFloat(input.value);
            count++;
        }
    });

    // If there are no inputs with values, display "-"
    if (count === 0) {
        outputBox.textContent = "-";
    } else {
        // Calculate and display the average
        const average = sum / count;
        outputBox.textContent = average.toFixed(2); // Displaying average up to 2 decimal places
    }
}

// Add event listener to each input field to listen for changes
inputFields.forEach(input => {
    input.addEventListener('input', calculateAverage);
    input.addEventListener('change', calculateAverage);
});