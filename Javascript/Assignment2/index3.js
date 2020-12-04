function find(x=document.getElementById("").value,isEven){
    var a = x.split(",");
    for(var i=0; i<a.length; i++){
        if(isEven(a[i])){
            alert(a[i]);
            break;
        }
        else{
            alert("No even number");
        }
    }
}

function isEven(y){
    return((y%2==0));
}
