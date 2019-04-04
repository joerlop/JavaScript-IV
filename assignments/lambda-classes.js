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
}

class Student extends Person {
    constructor(sAtts) {
        super(sAtts);
        this.previousBackground = sAtts.previousBackground;
        this.className = sAtts.className;
        this.favSubjects = sAtts.favSubjects;
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