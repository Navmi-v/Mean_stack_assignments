//Object creation with three members and two methods
let order = {
    id: 1,
    title: "Kaizen",
    price: 250,
    printOrder: function () {
        console.log(this.id);
        console.log(this.title);
        console.log(this.price);
    },
    getPrice: function () {
        console.log(this.price);
    }
};
order.printOrder();
order.getPrice();
//copying order
let copy_order = Object.assign({}, order);
console.log(copy_order.id);
//# sourceMappingURL=es3.js.map