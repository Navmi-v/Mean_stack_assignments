//Interfaces

interface Printable{
    name: string;
    age?: number;
    radius?: number;
}

let circle: Printable = {
    name:"Circles",
    radius: 10
}

let employee: Printable = {
    name: "Ross Geller",
    age: 32
}

let PrintAll = (circle,employee) => {
    console.log(circle);
    console.log(employee);
}

PrintAll(circle,employee);