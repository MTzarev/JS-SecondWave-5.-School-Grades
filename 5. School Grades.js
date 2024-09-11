function schoolGrades(arr) {
    let objSchool = {};
    for (let line of arr) {
        let parts = line.split(` `);
        let name = parts.shift();
        let grades = parts.slice().map(Number);
        let qty = grades.length;
        let totalGrades = grades.reduce((a, b) => a + b);
        if (objSchool.hasOwnProperty(name)) {
            objSchool[name].totalGrades += totalGrades;
            objSchool[name].qty += qty;
        } else {
            objSchool[name] = { totalGrades, qty };
        }
    }
    let sorted = Object.keys(objSchool).sort();
for (let name of sorted){
    let avg = objSchool[name].totalGrades/objSchool[name].qty;
    console.log(`${name}: ${avg.toFixed(2)}`);
    
}
}
schoolGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6']);
