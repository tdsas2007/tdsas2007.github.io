document.getElementById('demo').innerHTML="hi";

    //0-100
      for(let i=0;i<=100;i++){
        console.log(i);
      }
    //算出圓面積
     function circleArea(radius){
       return (3.14*radius*radius);
     }
     console.log(circleArea(20))
    //算出BMI值
     function bmi(tall,weight){
        return (weight/((tall/100)**2));
     }
      console.log(bmi(180,70))


 var a=[1,2,3,4,5,6,7,8,9,10]

 function deleteItemfromArray(a,index){
 //   var newArray=[];
 //   for(var i=0;i<a.length;i++){
 //     if(i !=index) newArray.push(a[i]);
    
 //   }
   // return newArray;
   a.splice(index,1)
   return a;
 }
 console.log(deleteItemfromArray(a,2))


 var sam={
   age:12,
   weight:60,
   height:180,
   grade:[80,40,22]
 }
 console.log(sam)


var button=document.getElementById('create');
// button.addEventListener("click",addData);

var input=document.getElementById('input');
var list=document.getElementById('list');

var todolist=JSON.parse(localStorage.getItem("listItems"))||[];
render();


function addData(){
  // alert(todolist);
  if(input.value !=""){
  todolist.push(input.value);//把值塞到todolist[]
 
  input.value="";  //將輸入框設定為空值，內容輸入後就會消失
  render();
  }
}


function render(){
  localStorage.setItem("listItems",JSON.stringify(todolist));
    var content=""
  for(var i=0;i<todolist.length;i++){
    content=content+"<div><button id='delete' onclick='deleteData("+i+")'>delete</button>"+todolist[i]+"</div>";
     
  }
  list.innerHTML=content;
}
    
function clearData () {
    todolist=[];
    render();
}
 
function deleteData(idx){
    todolist.splice(idx);//splice(抓每個陣列資料的順序,刪掉幾個)
    render();
}