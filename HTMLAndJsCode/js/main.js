let TheWaste=[[]];
let waste=document.getElementById("waste").value;
let number=document.getElementById("number").value;
let status=document.getElementById("status").value;
function Insert(){
    let count =1;
    let waste=document.getElementById("waste").value;
    let number=document.getElementById("number").value;
    let status=document.getElementById("status").value;
    document.getElementById("waste").clear();
    document.getElementById("number").clear();
    document.getElementById("status").clear();
    TheWaste[count][1]=waste;
    TheWaste[count][2]=number;
    TheWaste[count][3]=status;;
    count++;
}