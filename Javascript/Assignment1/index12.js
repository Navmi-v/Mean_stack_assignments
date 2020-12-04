function letString(string){

    var token=""
    var result_map={}
    var other_str=""
    
    for(var i=0;i<string.length;i++){
        if (string[i]!='a' && string[i]!='b') {

            other_str=other_str+string[i]

        } else {

            result_map[other_str.length]=[...other_str];
            other_str="";
            
        }
    }
    var maxKey=Math.max.apply(null,Object.keys(result_map))
    var answer=result_map[maxKey];
    console.log(answer.join(""));
    
}

letString("ababsdababfgababsdfab")