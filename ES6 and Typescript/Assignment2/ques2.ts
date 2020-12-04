//question 2 and 3 combined
function* getNextArmstrong(){
    
  let num=153;
          while(true){
              let len = num.toString().length;
              let sum=0
              let temp = num;
              let rem =0;
              while(temp>0){
                  rem = temp%10;
                  sum+= Math.pow(rem,len);
                  temp = parseInt(temp/10);
              }

              if(sum === num){
                  if(num<1000){
                      yield num++;
                  }else{
                      throw "Num greater then 1000";
                  }
                  
              }

              else{
                  num++; 
              }
              
          }
}

let arm = getNextArmstrong();
console.log(arm.next().value);
console.log(arm.next().value);
console.log(arm.next().value);
console.log(arm.next().value);
console.log("Resetting Generator");
arm = getNextArmstrong();
console.log(arm.next().value);
console.log(arm.next().value);
console.log(arm.next().value);
console.log(arm.next().value);
console.log(arm.next().value);