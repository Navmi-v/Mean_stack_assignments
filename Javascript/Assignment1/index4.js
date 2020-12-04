//page1 question-4
function numHeads(s,n){
    if(s=="H"){
        var h=Math.floor(n/2)
        console.log(h/n)
        
    }else if(s=="T"){
       var h=Math.ceil(n/2)
       console.log(h/n)
       
    }else{
        console.log("counterfiet coin")
    }
    
}
numHeads("H",11)