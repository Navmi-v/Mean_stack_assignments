// add()
function add() {
    let a = 10;
    let b = 20;
    console.log(a + b);
}
;
add();
//function userfriends with two arguments
let userFriends = function (username, ...arrayofFriends) {
    console.log(`The user name is ${username}`);
    console.log(`The list of friends are as follows:`);
    for (let Friends of arrayofFriends) {
        console.log(Friends);
    }
};
userFriends("doraemon", "nobita", "suneo", "sizuka");
//Print names in capital letters
let printCapitalNames = (...names) => {
    for (let i in names) {
        console.log(names[i].toUpperCase());
    }
};
let names = ["Natasha, Ironman, Thor"];
printCapitalNames(...names);
//# sourceMappingURL=es5.js.map