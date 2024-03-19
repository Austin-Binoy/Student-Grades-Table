document.addEventListener("DOMContentLoaded", function() {
    const inputBoxes = document.querySelectorAll('.assignment input');
    inputBoxes.forEach(function(inputBox) {
        inputBox.addEventListener('input', function() {
            const parentRow = inputBox.closest('tr');
            const inputValues = Array.from(parentRow.querySelectorAll('.assignment input')).map(input => parseInt(input.value) || 0);
            const average = Math.round(inputValues.reduce((total, value) => total + value, 0) / inputValues.length);//averages the amount oaf assignments
            const averageOutput = parentRow.querySelector('.average');
            averageOutput.textContent = isNaN(average) ? '' : average;//make average output
            if (!isNaN(average) && average < 60) {
                averageOutput.style.backgroundColor = 'red'; // Light up the box in red if average is below 60%
                averageOutput.style.color = 'white'; //text color to white
            } else {
                averageOutput.style.backgroundColor = ''; // Reset background color if average is not below 60%
                averageOutput.style.color = ''; // Reset text color
            }
        });
    });

    const table = document.getElementById("schoolGrades");
    const rows = table.getElementsByTagName("tr");

    // Hide all rows except the first 5
    for (let i = 5; i < rows.length; i++) {
        rows[i].style.display = "none";
    }

    // Add event listener for add row button
    document.getElementById("addRowBtn").addEventListener("click", function() {
        for (let i = 5; i < rows.length; i++) {
            if (rows[i].style.display === "none") {
                rows[i].style.display = "table-row";
                break;
            }
        }
    });

    // Add event listener for remove row button
    document.getElementById("removeRowBtn").addEventListener("click", function() {
        for (let i = rows.length - 1; i >= 5; i--) {
            if (rows[i].style.display !== "none") {
                rows[i].style.display = "none";
                break;
            }
        }
    });
});

// Function to remove '-' from input on input
function removeMinus(input) {
    input.value = input.value.replace('-', '');//removes - when inputting
}














addColumnBtn.addEventListener('click', function() {
    addNewColumn();
});
function convertGradeToLetter(percentage) {
    if (percentage >= 93) return 'A';
    else if (percentage >= 90) return 'A-';
    else if (percentage >= 87) return 'B+';
    else if (percentage >= 83) return 'B';
    else if (percentage >= 80) return 'B-';
    else if (percentage >= 77) return 'C+';
    else if (percentage >= 73) return 'C';
    else if (percentage >= 70) return 'C-';
    else if (percentage >= 67) return 'D+';
    else if (percentage >= 63) return 'D';
    else if (percentage >= 60) return 'D-';
    else return 'F';
}
function convertGradeTo4Point(percentage) {
    if (percentage >= 93) return 4.0;
    else if (percentage >= 90) return 3.7;
    else if (percentage >= 87) return 3.3;
    else if (percentage >= 83) return 3.0;
    else if (percentage >= 80) return 2.7;
    else if (percentage >= 77) return 2.3;
    else if (percentage >= 73) return 2.0;
    else if (percentage >= 70) return 1.7;
    else if (percentage >= 67) return 1.3;
    else if (percentage >= 63) return 1.0;
    else if (percentage >= 60) return 0.7;
    else return 0.0;
}
// Function to toggle grade presentation on click
function toggleGrade() {
    const averageCells = table.querySelectorAll('.average');
    averageCells.forEach(cell => {
        let currentText = cell.textContent.replace('%', '').trim();
        if (currentText === 'F') {
            // Assuming 'F' grade cannot be converted back to percentage
            return;
        }

        if (currentText.includes('.')) { // 4.0 Scale
            cell.textContent = cell.dataset.originalGrade + '';
            cell.removeAttribute('average');
        } else if (isNaN(currentText)) { // Letter Grade
         
            const percentage = cell.dataset.originalGrade;
            const scaleGrade = convertGradeTo4Point(percentage);
            cell.textContent = scaleGrade.toFixed(1); 
        } else { // Percent Grade
        }
    });
}
