function abc(n){
    let a=[]
    let c
    for(let i=0;i<=n;i++){
        let s=(i.toString(2))
        c=0
        for(let j=0;j<s.length;j++){
            if(s[j]==1){
                c++
            }
        }
        a.push(c)
    }
    console.log(a.join(" "))
}
//Enter code here
 function runProgram(input){
     //Input Taking Here
     input=input.trim().split("\n")
     let tc=+input[0]
     let line=1
     for(let i=0;i<tc;i++){
         let n=+input[line++]
         abc(n)
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