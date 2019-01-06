//Arr contains a number of teams
var arr=["t1","t2","t3","t4","t5","t6","t7","t8","t9","t10","t11","t12","t13","t14","t15","t16","t17","t18","t19"];
function matchMaker(arr){
    var localArr=arr,res=[];
    for(let i=0;i<localArr.length;i++){


      subfunction=()=>{
        var random=Math.floor(Math.random()*(localArr.length-i-1))+i+1;
        localArr[random]==undefined?res.push(`${localArr[i]}-please wait`):res.push(`${localArr[i]}-${localArr[random]}`);
        localArr.splice(random,1);
     }


    subfunction();
    }
    return res;
}
console.log(matchMaker(arr));