function calculateStudentGrade(score) {
  // Start coding here
  let gscore;
  switch (true) {
    case score >= 90:
      gscore = "A";
      break;
    case score >= 80 && score <= 89:
      gscore = "B";
      break;
    case score >= 70 && score <= 79:
      gscore = "C";
      break;
    case score >= 60 && score <= 69:
      gscore = "D";
      break;
    case score <= 59:
      gscore = "F";
      break;

    default:
      "F";
      break;
  }
  return gscore;
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
