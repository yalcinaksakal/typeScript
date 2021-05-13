// priitives:number, string, boolean
let age: number;
age = 12;
let userName: string = "meh";
let isTrue: boolean = true;

// more complex types:arrays, objects
let hobbies: string[] = ["cinema", "music", "swimming"];

//default type is any
let person: { name: string; age: number };
person = {
  name: "ya",
  age: 40,
};

let people: { name: string; age: number }[];
people.push(person);
people.push(person);
console.log(people);

// type inference
//detects and assign type automatically while assigning value at creation
let course = "react"; //course:string
course = 123;

let player = {
  name: "ya",
  age: 40,
};
player.age = "40"; //player:{name:string,age:number}

let players = [player, player];
players.push({
  name: "ya",
  age: "40",
});

// union types
let lecture: string | number | boolean = "react";
lecture = true;
lecture = 12;

// type alias (type definiiton)

type Person = { name: string; age: number };

let visitor: Person;
let swimmer: Person;

//Function types,parameters

function add(a: number, b: number): number {
  return a + b; //type inference, returned value is a number
}
function printOutput(value: any): void {
  console.log(value);
}

// Generics- type safe and flexible functions
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 4];

const updatedArray = insertAtBeginning(demoArray, -1);
updatedArray[0].split(",");
insertAtBeginning(["a", "n"], "c");

insertAtBeginning<boolean>([true], false);
