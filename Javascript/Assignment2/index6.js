function map(){
    var x=[1,2,3,4,5]
    var y=[]
    for(i=0;i<x.length;i++){
        var m=square(x[i]);
        y.push(m);
    }
    console.log(y);
}
function square(elem){
    return elem*elem;
}
map()