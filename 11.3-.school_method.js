const school = {
  teachers: [
    {
      name: "Hesham",
      subjects: ['Math','Biology', "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      name: "Avi",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      name: "Mousa",
      age: 20,
    },
    {
      name: "Mike",
      age: 29,
    },
    {
      name: "Pini",
      age: 30,
    },
    {
      name: "Mary",
      age: 27,
    },
  ]
}

  school.assignStudent= function (student, subject) {
    const studentObj = school.students.filter((students) => {
      if (students.name === student) {
        return students;
      }
    });

    const teacher = school.teachers.filter((teacher) => {
      if (teacher.capacityLeft > 0 && teacher.subjects.includes(subject)) {
        return teacher;
      }
    });
    const firstAvailableTeacher = teacher[0];
    if (firstAvailableTeacher) {
      firstAvailableTeacher.capacityLeft -= 1;
      firstAvailableTeacher.students.push(studentObj);
    } else {
      console.log("Sorry, no available teachers left");
    }
  },

school.assignStudent("Jennifer", "history");
console.log(school.teachers);
