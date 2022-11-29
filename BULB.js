function abc(n,a){
    let arr=[]
    for(let i=0;i<n;i++){
        arr.push(true)
    }
    for(let i=0;i<n;i++){
        arr[a[i]-1]=!arr[a[i]-1]
        // console.log(arr)
        let carr=[]
        for(let j=0;j<n;j++){
            if(arr[j]===true){
                carr.push(j+1)
                break;
            }
        }
        for(let j=n-1;j>=0;j--){
            if(arr[j]===true){
                carr.push(j+1)
                break;
            }
        }
        console.log(carr.join(" "))
    }
}
//Enter code here
 function runProgram(input){
     //Input Taking Here
     input=input.trim().split("\n")
     let n=+input[0]
     let a=input[1].trim().split(" ").map(Number)
     abc(n,a)
 }
 if(process.env.USER===""){
     runProgram('');
 }else{
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read="";
     process.stdin.on("data",function(input){
         read+=input;
     });
     process.stdin.on("end",function(){
         read=read.replace(/\n$/,"");
         read=read.replace(/\n$/,'');
         runProgram(read);
     });
     process.on('SIGINT',function(){
         read=read.replace(/\n$/,"");
         runProgramm(read);
         process.et(0);
     });
 }