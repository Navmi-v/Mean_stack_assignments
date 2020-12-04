//scoping
if (true) {
    let ab = "Hi there";
    console.log(ab);
}
;
//outside if block
console.log(ab);
//This red error line shows that it cannot access "ab" outside the block as let is block scoped.
//# sourceMappingURL=es2.js.map