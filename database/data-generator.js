const fs = require('fs');
const { LoremIpsum } = require('lorem-ipsum');

const outputPath = './database/data.json';

// utility function
const random = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const data = {
  students: [],
  announcements: [],
  routes: [
    {0: 'Bus 1'},
    {1: 'Bus 2'},
    {2: 'Bus 3'}
  ]
};

// ******** Generate Students ************* //

const names = `Alex Coplin	Zach Mansell
Andrew Yoder	Tyler Jones
Ben Chasin	Tristan Smith
Blake Jones	Steven Walker
Brennan Caldwell	Steven Trager
Chandra Nguyen	Stephanye Blakely
Cinzia Borello	Robert Walsh
Doruk Gurleyen	Ryan Zigler
Elvin Kosova	Owen Arthur
Evan Kolb	Nathan Vu
Grace Lindelien	Mike Shertz
Henry Bell	Meredith Myers
Hewah Bahrami	Matthew Wigglesworth
Jackson Todd	Mark Picel
James Olivas	Josh Rogen
Joe Dry	Jordan Pagni`;

let array = names.split('\t');

for (var i = 0; i < array.length; i++ ) {
  array[i] = array[i].split('\n');
}
array = array.flat();

array.forEach((student, index) => {
  // define a new student record
  let newRecord = {};
  // isolate and add first and last name
  newRecord.id = index;
  const names = student.split(' ');
  newRecord.firstName = names[0];
  newRecord.lastName = names[1];
  newRecord.imageURL = '';
  // add a random element from routes for AM_Route & PM_Route
  const randomRoute = data.routes[random(0,3)];
  newRecord.AM_Route = randomRoute;
  newRecord.PM_Route = randomRoute;

  // push to the students array
  data.students.push(newRecord);
});


// ******** Generate Announcements ************* //

const numberOfStudents = data.students.length;

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 15,
    min: 5
  }
});

// generate between 2 and 9 new announcements
const numberOfAnn = random (2, 10);
for (var i = 0; i < numberOfAnn; i++) {
  let newAnnouncement = {
    id: i,
    start_date: '',
    end_date: '',
    text: lorem.generateSentences(1),
    student_id: random(0, numberOfStudents),
    route_id: random(0, 3)
  };
  data.announcements.push(newAnnouncement);
}

// write to JSON file
fs.writeFile(outputPath, JSON.stringify(data, null, 2), (err) => {
  if(err) throw err;
  console.log(`${numberOfStudents} students and ${numberOfAnn} announcements saved!`);
})