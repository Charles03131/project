document.addEventListener('DOMContentLoaded',() => {
  
  const theForm=document.querySelector("#myform");
  const input=document.querySelector("#todoinput");
  const removeBtn=document.createElement('button');
  removeBtn.innerText="X";

  const savedTodos=JSON.parse(localStorage.getItem("todos")) ||[]; 
  const ul=document.querySelector('ul');    ////
   for(let i=0; i<savedTodos.length; i++){
     let newListItem=document.createElement('li');
     newListItem.appendChild(removeBtn);
     newListItem.innerText=savedTodos[i].task;
     newListItem.done=savedTodos[i].done ? true:false;
     if(newListItem.done){
       newListItem.style.textDecoration="line-through";
     }
    ul.appendChild(newListItem);
   }

  
  theForm.addEventListener('submit',function(e){
    e.preventDefault();
      
  const newListItem=document.createElement('li');
  const ul=document.querySelector('ul');
  

     //removeBtn.innerText="delete"
    newListItem.innerText=document.getElementById("todoinput").value;
    newListItem.appendChild(removeBtn);
    newListItem.done=false;
    ul.appendChild(newListItem);
    
    
    console.log(newListItem);
    
    theForm.reset();
   
    
    removeBtn.addEventListener('click',function(e){
          e.target.parentNode.remove();
       });
   
     
    newListItem.addEventListener('click',function(e){
            crossOff();
    })
    
    function crossOff(){
      if(newListItem.classList.contains("done")){
         newListItem.classList.remove("done");
         newListItem.done=false;
         }else{
           newListItem.classList.add("done");
           newListItem.done=true;
         }
    }  
      // function crossOff is bassed on a snippet from geeksforgeeks.org
    savedTodos.push({task:newListItem.innerText,done:false});
  
    localStorage.setItem("todos",JSON.stringify(savedTodos));
    
  });
  
 });
  
  
    
    
    