//2 questions combined
var amithab = {fname: "Amitabh", lname: "Bachan", age: 22, skills: "C", dob: "24/10/1996",address: {city: "Hyderabad", pincode:"521185"},married: "false", profression: "sr analyst"};
var abhishek = {fname: "Abhishek" ,age: 21, skills: "HTML", dob: "08/06/1997", married: "false", profression: "jr analyst"};
var abhishek= Object.create(amithab);
print = function(){
    console.log(amithab);
    console.log(abhishek.lname);
    console.log(abhishek.address);
    console.log(Aaradhya);

}();
var Aaradhya = {fname: "Aaradhya", age: 10};
var Aaradhya = Object.create(abhishek);


