function Person (fname, lname, age, skills, dob, address, married, profression) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.skills = skills;
        this.dob = dob;
        this.address = address;
        this.married = married;
        this.profression = profression;

}

person1 = new Person("Nikhil", "Goud", 22, ["c"], "24/10/1996", {city:"hyderabad", pincode:"521185"}, "false", "sr analyst");
person2 = new Person("Harish", "China", 21, ["HTML"], "08/06/1997", {city:"Ameerpet", pincode:"500038"}, "false", "jr analyst");


for(x in person1 ){console.log(person1[x])}
for(x in person2 ){console.log(person1[x])}
