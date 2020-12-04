function composedValue(square , double, x=Number(document.getElementById("num").value)){
    alert(square(double(x)));
    alert(double(square(x)));
  }
  
  function double(x){
      return x*2;
  }
  function square(y){
      return y*y;
  }v