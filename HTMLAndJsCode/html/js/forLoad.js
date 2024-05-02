//Khởi tạo mảng chạy ra các ý tưởng
let dv=[];
dv[0]="";
function voNhua(){
    dv[1]=;
    dv[2]=;
    dv[3]=;
    dv[4]=;
    dv[5]=;
}
function laCay(){
    dv[1]=;
    dv[2]=;
    dv[3]=;
    dv[4]=;
    dv[5]=;
}
function Giay(){
    dv[1]=;
    dv[2]=;
    dv[3]=;
    dv[4]=;
    dv[5]=;
}
function voKimLoai(){
    dv[1]=;
    dv[2]=;
    dv[3]=;
    dv[4]=;
    dv[5]=;
}
function pin(){
    dv[1]=;
    dv[2]=;
    dv[3]=;
    dv[4]=;
    dv[5]=;
}
function kem{
    dv[1]=;
    dv[2]=;
    dv[3]=;
    dv[4]=;
    dv[5]=;
}
// duyệt các loại rác thải được liệt kế
let forCount=0;
let idea="";
for (let i=1;i<=count;i++){
    if(TheWaste[forCount][1]<TheWaste[i][1]){
        forCount=i;
        idea=TheWaste[i][0]
    }
}
// duyệt trường hợp xảy ra
switch (idea){
    case "vo chai nhua":
        voNhua();
        break;
    case "la cay":
        laCay();
        break;
    case "giay khong su dung":
        Giay();
        break;
    case "vo nuoc kim loai":
        voKimLoai();
        break;
    case "pin":
        pin();
        break;
    case "que kem go":
        kem()
        break;
}
// in ra màn hình
document.getElementById("div1").innerHTML=dv[1];
document.getElementById("div2").innerHTML=dv[2];
document.getElementById("div3").innerHTML=dv[3];
document.getElementById("div4").innerHTML=dv[4];
document.getElementById("div5").innerHTML=dv[5];
