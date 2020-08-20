const school = [
  {
    teacher1: 'Hesham',
    subjects: ['Math','Biology'],
    students: ['stud1', 'stud2', 'stud3'],
    leftCapacity: 3
  },
  {
    teacher2: 'Avi',
    subjects: ['Physics','chemistry'],
    students: ['stud1', 'stud2'],
    leftCapacity: 2
  },
  {
    student1 : 'Mousa',
    age: 20
  },
  {
    student2 : 'Mike',
    age: 29
  },
  {
    student3 : 'Pini',
    age: 30
  },
  {
    student2 : 'Mary',
    age: 27
  },
  
  ]
  
  function assignStudent(student, subject){
    for(let i=0; i<school.length; i++){
      if(school.subject === subject && school.leftCapacity > 0){
        console.log(school[student].concat(student));
        school.leftCapacity--;
      }
    }
    console.log(school);
  }

  // console.log(school);
  console.log(assignStudent('Mousa','Math'));