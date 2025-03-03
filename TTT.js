let button1 =document.querySelectorAll(".box")
let resetbtn =document.querySelector('#reset-btn')
let newGameBtn=document.querySelector("#new-game")
let msgContainer =document.querySelector(".msg-container")
let msg =document.querySelector("#msg")



let Turn0 = true;
let arr =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]



const resetGame =() => {
    Turn0 =true;
    enableboxes();
    msgContainer.classList.add("hide");
}


button1.forEach((box) => {
    box.addEventListener("click", () =>{
if(Turn0){
    box.innerText ="O"
    Turn0 = false;
}else{
    box.innerText ="X"
    Turn0 = true
}
box.disabled = true;
 checkWinner();
    });
});




const disableboxes =() =>{
    for(let boxes of button1){
        boxes.disabled =true;
    }
}
const enableboxes =() =>{
    for(let boxes of button1){
        boxes.disabled =false;
        button1.innerText ="";
    }
}
const showwinner = (winner) =>{
    msg.innerText =`Congratulation winnwer is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}




const checkWinner =() =>{
    for(a of arr){
        let post1val = button1[a[0]].innerText;
        let post2val = button1[a[1]].innerText;
        let post3val = button1[a[2]].innerText;
    
    if(post1val != " " && post2val != "" && post3val != ""){
        if(post1val ===post2val && post2val ===post3val){
            console.log("Winner")
            showwinner(post1val);
        }
    }
}
}




newGameBtn.addEventListener("click", resetGame)
resetbtn.addEventListener("click", resetGame)