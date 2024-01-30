const button=document.getElementById('enter');
const task=document.getElementById('task');
const description=document.getElementById('desc');
const duration=document.getElementById('dur');
const table=document.getElementById('tab');
let run=false;
let start = document.getElementById("start")
start.addEventListener("click",toggleTimer);
// function addTask(e)
// {
//     e.preventDefault()
//     // console.log(task.value);
//     // console.log(description.value);
//     // console.log(duration.value);
//     table.innerHTML+=(`<tr><td>${task.value}</td><td>${description.value}</td><td>${hour} Hour : ${min} Min : ${sec} Sec</td></tr>`);
//     task.value="";description.value="";duration.value="";
// }

let sec=0;
let min=0;
let hour=0;
let i;
function toggleTimer(){
    if(run){
stops();
document.getElementById('start').innerText='Start';
start.style.setProperty('background-color','green');
    }
    else{
        starts();
        document.getElementById('start').innerText='Stop';
        
        start.style.setProperty('background-color','red');
    }
    run=!run;
}
function counter(){
    sec=sec+1;   
    if(sec>=60)
    {
        min=min+1;
        sec=0;
    }
    if(min>=60)
    {
        hour=hour+1;
        min=0;
    }
    document.getElementById("count").innerHTML=`${hour} Hour:${min} Min:${sec} Sec`
}
function starts(){
    i=setInterval(counter,1000); 
    
}
function stops(){
 clearInterval(i);
 table.innerHTML+=(`<tr><td>${task.value}</td><td>${description.value}</td><td>${hour} Hour : ${min} Min : ${sec} Sec</td></tr>`);
 task.value="";description.value="";sec=0;min=0;hour=0;
 run=true;
 document.getElementById("count").innerHTML="00:00:00"; 
}

 
