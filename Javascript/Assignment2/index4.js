function map(list,square){
    var number=new Array();
    var x = new Array();
    for(i=0;i<=list.length();i++){
        var x =square(list[i])
        number.push(x)
        }
}
function square(x){
    return x*x;
}

function print(number){
    for(i=0;i<=number.length();i++){
        console.log(number[i])
    }
}
var y =[10,34,34,34,566,67]
map(y,square);
print(number)
print(x)

