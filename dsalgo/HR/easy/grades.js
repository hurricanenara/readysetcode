function gradingStudents(grades) {
    // Write your code here
    const rounded = [];
    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];
        const nextMultiple = Math.ceil(grade / 5) * 5;
        
        if (grade < 38) {
            rounded.push(grade);
        } else if ((nextMultiple - grade) < 3) {
            rounded.push(nextMultiple);
        } else {
            rounded.push(grade);
        }
    }
    return rounded;
}