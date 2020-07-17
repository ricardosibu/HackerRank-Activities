const grades = [4, 73, 67, 38, 33];

const gradesTotal = grades.map((n) => {
    let calculate = 5 - (n % 5);
    console.log(calculate, n);
    if (calculate < 3 && n >= 38) {
        n+= calculate
    }
    
    return n;
})