//Arrow functions
let a;
let array = [];
let names = ["Tom", "Jerry", "Ivan"];
for( let i in names){
    a = names[i].length;
    let b = {
        name: names[i],
        length: a
    };
    array.push(b);

}

for(let i in array){
    console.log(array[i]);
}