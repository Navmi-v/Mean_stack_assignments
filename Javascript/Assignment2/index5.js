function find(){
    var x=[1,2,3,4,5];
    var z=prompt("enter value to find");
    for(i=0;i<=x.length;i++){
     if(x[i]==z){
         console.log("it is at index "+ i);
     }
 }
 console.log("it is not available at index");
 
 }
 find()




// const find = (list,first,last,number_tofind)=>{
//     if(last<1){
//         return -1;
//     }
//     if(list[first]==number_tofind){
//         return first;
//         console.log(first);
//     }
//     if(list[last]==number_tofind){
//         return last;
//         console.log(last);
//     }
//     return (find(list,first+1,last-1,number_tofind))
// }
// var x = new Array();
// x=[23,23,234,234,345];
// var r=x.length();
//find(x,0,r,23)



