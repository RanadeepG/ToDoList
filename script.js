let activities= document.querySelector("input");
let taskAdder= document.querySelector("#add");
let taskDelete= document.querySelector("#remove");

const bodyOut= document.querySelector("ol");
let counter=0;
let arr=[];
bodyOut.innerText="Activities:";
function add(){
    let li= document.createElement("li");
    let del= document.createElement("button");
    del.innerText="delete";
    li.innerText= arr[counter];
    bodyOut.appendChild(li);
    li.append(del);

}

taskAdder.addEventListener("click",()=>{
    
    if(activities.value ==''){
        alert(`empty task cannot be added`);
    }
    else{
    arr[counter]= activities.value;
    console.log(arr[counter]);
    add();
    counter++;
    }
    activities.value="";
    saveData();
})

bodyOut.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
     else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", bodyOut.innerHTML);
}

function printData(){
    bodyOut.innerHTML=localStorage.getItem("data");
}

printData();
