const kimStudents = studentList.filter(function(student){
  return student.startsWith("김");
});

const oddStudents = studentList.filter(function(student, index){
  return index % 2 === 0;
});

const threeLetterStudents = studentList.filter(function(student){
  return student.length === 3;
});

const studentsWithSuffix = studentList.map(function(student){
  return student + "님";
});

const upperCaseStudents = studentList.map(function(student){
  return student.toUpperCase();
});

console.log(kimStudents);
