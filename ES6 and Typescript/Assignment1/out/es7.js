//Destructuring Array
let simpleValues = [`Capgemini`, `Sogeti`, `Altran`, `Atos`];
let [first, second, third, fourth] = simpleValues;
//Printing third element
console.log(`The third element is ${third}`);
//Retreive using deep matching. Part 2
let organization = {
    name: "Capgemini",
    Address: {
        city: "Mumbai",
        pincode: 400105
    }
};
console.log(organization.Address.pincode);
//# sourceMappingURL=es7.js.map