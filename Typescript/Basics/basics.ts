//Primitives: number,string, boolean, null, undefined
let age: number;
age = 18;
age = 10.3;
// age='34'; error

let userName: string;
userName = 'Mahir';
// userName=true; error
// userName=333; error

let isInstructor: boolean;
isInstructor = true;
// isInstructor = 1; error
// isInstructor='true'; error


// more Complex types
let hobbies: string[]; //array of strings
hobbies = ['biking', 'driving', 'swimming'];
// hobbies=[1,2,'Mahir']; error

//making a specific object
// object
let person: {
    name: string,
    age: number
};

// array of object
let multiplePeople: {
    name: string,
    age: number
}[];


//Type Inference
let course = 'React';
// course = 1; error
course = 'Angular';


//union type allows multiple types for particular variable
let newCourse: string | number;
newCourse = 'Angular';
newCourse = 134;


//creating the type alias to avoid repeating a set of certain code.
type Person = {
    name: string,
    age: number
};

let newPerson: Person;
let newMultiplePersons: Person[];


//function and types

//setting the function return type
function add1(a: number, b: number): number {
    return a + b;
}

//void = never returns
function printOut(value: any): void {
    console.log(value);
}


//generics
//when function try to insert something  in array and want to keep type uniform across array.

function insertInArray<T>(array: T[], val: T) {
    let newArray = [val, ...array];
    return newArray;
};

let currentArray = [1, 2, 3];
let updatedArray = insertInArray(currentArray, -1);

let currStringArray = ['mahir', 'ratanpara'];
let updatedStringArray = insertInArray(currStringArray, 'mr');


//classes and typescript
class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(firstName: string, lastName: string, age: number, courses: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        //return copy of current string array.
        return this.courses.slice();
    }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enrol('React');
// student.listCourses(); => Angular, React

// student.courses => error as courses are private


//using interfaces
interface Human {
    firstName: string | undefined;
    age: number | undefined;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello!');
    },
};

class Instructor implements Human {
    firstName: string | undefined;
    age: number | undefined;

    greet() {
        console.log('Hello!!!!');
    }
}