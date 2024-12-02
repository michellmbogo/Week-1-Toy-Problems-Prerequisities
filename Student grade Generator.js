function studentGrade() {
    let marks = prompt("Enter the student's marks (0 - 100):");// Prompt the user for marks

    // Convert the input to a number
    marks = Number(marks);


    // Validate the input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        
        return;
    }


    // Determine the grade
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60 && marks <= 79) {
        grade = "B";
    } else if (marks >= 50 && marks <= 59) {
        grade = "C";
    } else if (marks >= 40 && marks <= 49) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Output the grade
    console.log(`The student's grade is: ${grade}`);
}

// Call the function
studentGrade();
