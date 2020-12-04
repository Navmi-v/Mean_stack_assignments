//page 1 Question 3
function numHeads(s,n){
    if(s=="H"){
        var h=Math.floor(n/2)
        console.log(h)
        
    }else if(s=="T"){
       var h=Math.ceil(n/2)
       console.log(h)
       
    }else{
        console.log("counterfiet coin")
    }
    
}
numHeads("H",10)