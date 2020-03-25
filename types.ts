const isFetsching: boolean = true;
const isLoaded: boolean = false;

let num: number = 88;

console.log(num)

num = 42;

console.log(num)

//Array

const myArr: number[] = [1,1,2,3,5];
const myArray: Array<number> = [1,2,3,4,5];

//Tuple

const myTuple: [string, number, string, string, number] = ['Oleg', 1234567, 'Hello', 'asd', 123213]

console.log(myTuple)

// Any

let myVar: any = 88

myVar = 'New type'

// Void

function myFunc(name: string): void {
    console.log('Void func')
}

// Never

function throwError(message: string): never {
    throw Error(message)
}

// function infinite():never {
//     while(true) {}
// }

// Type 
 
type ID = string | number

const id1: ID = 'admin'
const id2: ID = 88
//const id3: ID = true // нельзя 

// null and undefined