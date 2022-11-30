let c=0
function abc(n){
    if(n<0) return
    if(n===0){
        c++
        return
    }
    abc(n-4)
    abc(n-8)
}
//Enter code here
 function runProgram(input){
     //Input Taking Here
     input=input.trim().split("\n")
     let tc=+input[0]
     let line=1
     for(let i=0;i<tc;i++){
         let n=+input[line]
         c=0
         abc(n)
         console.log(c)
         line++
     }
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