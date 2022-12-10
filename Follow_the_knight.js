//Enter code here
function runProgram(input){
    //Input Taking Here
    input=input.trim().split(" ")
    let row=+input[0]-1
    let col=+input[1]-1
    let N=+input[2]
    abc(row,col,N)
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
function abc(row,col,N){
var arr=[]
for(let i=0;i<10;i++){
   let new_arr=[];
   for(let j=0;j<10;j++) new_arr.push(0)
   arr.push(new_arr)
}

// console.log("Before")
// printBoard(arr)

// var row=3-1 //1 based indexing
// var col=3-1 //1 based indexing
// var N=1
// console.log("After")
followKnight(arr,row,col,N)
// printBoard(arr)


function followKnight(board,row,col,N){
   if(row<0||row>=board.length||col<0||col>=board.length){
       return;
   }
   if(N===0){
       board[row][col]=1; // 1 indicates final position
       return
   }
   followKnight(board,row-2,col+1,N-1)
   followKnight(board,row-2,col-1,N-1)
   followKnight(board,row+2,col+1,N-1)
   followKnight(board,row+2,col-1,N-1)
   followKnight(board,row-1,col+2,N-1)
   followKnight(board,row+1,col+2,N-1)
   followKnight(board,row-1,col-2,N-1)
   followKnight(board,row+1,col-2,N-1)
}

// function printBoard(arr){
//     for(let i=0;i<arr.length;i++) console.log(arr[i].join(" "))
// }
let count=0
for(let ci=0;ci<10;ci++){
   for(let cj=0;cj<10;cj++){
       if(arr[ci][cj]==1) count++
   }
}
console.log(count)
}