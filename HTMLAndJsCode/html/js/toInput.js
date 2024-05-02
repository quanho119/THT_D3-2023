let TheWaste=[];
let count =1;
let Table="<table> <tr> <th>Waste</th> <th>Quantity</th> <th>Status</th> </tr> </table>";
const EndTable="</table>";
function Insert(){
    //nhập rác thải vào mảng lưu trữ
    TheWaste[count]=new Array(3);
    TheWaste[count][0]=document.getElementById("waste").value;
    TheWaste[count][1]=document.getElementById("number").value;
    TheWaste[count][2]=document.getElementById("status").value;
    document.getElementById("waste").innerHTML="";
    document.getElementById("number").innerHTML="";
    document.getElementById("status").innerHTML="";
    Display();
}
function Display()
{
    // hiển thị bảng đã nhập
    Table=Table.replace(EndTable,"");
    Table=Table+"<tr> <td>"+TheWaste[count][0]+"</td> <td>"+TheWaste[count][1]+"</td> <td>"+TheWaste[count][2]+"</td> </tr>"+EndTable;
    document.getElementById("table").innerHTML=Table;
    count++;
}