/*******************************************************************************
 * WEB222 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca
 * Academic Policy. No part of this assignment has been copied manually or
 * electronically from any other source (including web sites) or distributed to
 * other students.
 *
 * Name: Qing Zhang    Student ID: 130 982 218   Date: 2022-02-10
 *
 ******************************************************************************/

// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = {
    name: "",
    dob: new Date(),
    sid: "",
    program: "",
    gpa: 4.0,
    toString: function() {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
            ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa;
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1
console.log("\n\n*** Task 1 ***\n\n");

var last = courses.pop();

console.log("Course " + last.code + " was deleted from the array (courses)");

var ibc233 = { code: 'IBC233', name: 'iSERIES Business Computing', hours: 4, url: 'https://scs.senecac.on.ca/~ibc233/' };
var oop244 = { code: 'OOP244', name: 'Introduction to Object Oriented Programming', hours: 4, url: 'https://scs.senecac.on.ca/~oop244/' };
var web222 = { code: 'WEB222', name: 'Internet I - Internet Fundamentals', hours: 4, url: 'https://scs.senecac.on.ca/~web222/' };
var dbs201 = { code: 'DBS201', name: 'Introduction to Database Design and SQL', hours: 4, url: 'https://scs.senecac.on.ca/~dbs201/' };

console.log("Adding new course objects into the array (courses)");

courses.push(ibc233);
courses.push(oop244);
courses.push(web222);
courses.push(dbs201);

console.log("\nCourse objects in the array (courses): ");
for (var i = 0; i < courses.length; i++) {
    console.log('"' + courses[i].code + ', ' + courses[i].name + ', ' + courses[i].hours + ' hours/week, website: ' + courses[i].url + '"');
}

// task 2
console.log("\n\n*** Task 2 ***\n\n");

var student1 = Object.create(student);
student1.name = "John Smith";
student1.dob = new Date(1999, 8, 10);
student1.sid = "010456101";
student1.program = "CPA";
student1.gpa = 4;

var student2 = Object.create(student);
student2.name = "Jim Carrey";
student2.dob = new Date(1992, 0, 17);
student2.sid = "01245678";
student2.program = "CPD";
student2.gpa = 3.5;

var student3 = Object.create(student);
student3.name = "Justin Bieber";
student3.dob = new Date(1994, 2, 1);
student3.sid = "0987654321";
student3.program = "CAN";
student3.gpa = 3;

var student4 = Object.create(student);
student4.name = "Justin Trudeau";
student4.dob = new Date(1992, 0, 12);
student4.sid = "123456789";
student4.program = "CAN";
student4.gpa = 4;

var students = [];

students.push(student1);
students.push(student2);
students.push(student3);
students.push(student4);

console.log("Student objects in the array (students):");

function display(sglStudent, index) {
    console.log(index + ": " + sglStudent.toString());
}

students.forEach(function(element, index) {
    display(element, index);
})