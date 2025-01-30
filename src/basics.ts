let name : string = "Rishabh";

let xyz : undefined = undefined;
let x : null = null;

let isDone : Boolean = true;

let num : number = 100;

let nums : number[] = [1, 2, 3, 4, 5];
let arr : Array<string> = ["Rishabh", "Inder"];

enum Color {
    Red, Green, Blue
}

let a : Color = Color.Green;

let abc : [string, number] = ["hi", 400];

console.log(name, xyz, x, isDone, num, nums, arr, a);

interface User
{
    name : String;
    id : number;
    email? : string;
    readonly createdAt : Date;
}

const user : User = {
    name : "John",
    id : 1,
    email : "john@example.com",
    createdAt : new Date()
}

console.log(user);

function fact(n : number) : number
{
    if(n === 1 || n === 0)
    {
        return 1;
    }
    else
    {
        return n * fact(n - 1);
    }
}









console.log(fact(5));