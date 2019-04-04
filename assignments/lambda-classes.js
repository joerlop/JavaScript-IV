// CODE here for your Lambda Classes
class Person {
    constructor(pAttributes) {
        this.name = pAttributes.name;
        this.age = pAttributes.age;
        this.location = pAttributes.location;
        this.gender = pAttributes.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(iAtts) {
        super(iAtts);
        this.specialty = iAtts.specialty;
        this.favLanguage = iAtts.favLanguage;
        this.catchPhrase = iAtts.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }

    changeGrade(student) {
        let addOrSubstract = Math.random();
        if (addOrSubstract < 0.5) {
            let addValue = Math.ceil(Math.random() * 10);
            student.grade += addValue;
            if (student.grade > 100) student.grade = 100;
            return `${student.name}'s grade has been augmented by ${addValue} and is now ${student.grade}`;
        } else {
            let subtractValue = Math.ceil(Math.random() * 10);
            student.grade -= subtractValue;
            if (student.grade < 0) student.grade = 0;
            return `${student.name}'s grade has been reduced by ${subtractValue} and is now ${student.grade}`;
        }
    }
}

class Student extends Person {
    constructor(sAtts) {
        super(sAtts);
        this.previousBackground = sAtts.previousBackground;
        this.className = sAtts.className;
        this.favSubjects = sAtts.favSubjects;
        this.grade = sAtts.grade;
    }

    listsSubjects() {
        for (let subject of this.favSubjects) {
            console.log(subject);
        }
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor (pmAtts) {
        super(pmAtts);
        this.gradClassName = pmAtts.gradClassName;
        this.favInstructor = pmAtts.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const josh = new Instructor({
    name: 'Josh',
    location: 'Utah',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const bruna = new Instructor({
    name: 'Bruna',
    location: 'Budapest',
    age: 25,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Pop in and I'll show you`
});

const jonathan = new Student({
    name: 'Jonas',
    location: 'Locombia',
    age: 28,
    gender: 'male',
    previousBackground: 'Entrepreneur',
    className: 'WEB19',
    favSubjects: ["HTML", "CSS", "Crypto"],
    grade: 90
});

const elisa = new Student({
    name: 'Elisa',
    location: 'Spain',
    age: 26,
    gender: 'female',
    previousBackground: 'Beauty Specialist',
    className: 'WEB19',
    favSubjects: ["HTML", "CSS", "Javascript"],
    grade: 70
});

const sam = new ProjectManager({
    name: 'Sam',
    location: 'France',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Je suis Sam`,
    gradClassName: "WEB5",
    favInstructor: "Josh"
});

const luna = new ProjectManager({
    name: 'Luna',
    location: 'Ukraine',
    age: 30,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Helloooo you beautiful people`,
    gradClassName: "WEB4",
    favInstructor: "Adam"
});

josh.speak();
luna.speak();

jonathan.listsSubjects();
jonathan.sprintChallenge("Bitcoin");

luna.debugsCode(jonathan, "Bitcoin");

console.log(josh.changeGrade(jonathan));
console.log(josh.changeGrade(jonathan));
console.log(josh.changeGrade(jonathan));
console.log(josh.changeGrade(jonathan));