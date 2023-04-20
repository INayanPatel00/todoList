let input = document.querySelector("#input-text");
let addbutton = document.querySelector("#add");
let tasksList = document.querySelector(".tasks");
let inputbox = document.querySelector("#inputbox");
let updatebtn = document.createElement("button");
updatebtn.innerText = "update";

addbutton.addEventListener("click", function () {
  if (input.value === "") {
    alert("TODO is empty");
  } else {
    inputbox.appendChild(updatebtn);
    updatebtn.style.display = "none";
    let task = document.createElement("div");
    task.classList.add("task");
    let createele = document.createElement("p");
    createele.innerText = input.value;
    let editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    let deletbtn = document.createElement("button");
  
  
    deletbtn.innerText = "Delete";
    task.appendChild(createele);
    task.appendChild(editbtn);
    task.appendChild(deletbtn);
    


    editbtn.addEventListener("click", function (e) {
       
       
        
       input.value = e.target.parentElement.firstElementChild.innerText;
      updatebtn.style.display = "block";
      addbutton.style.display = "none";
      updatebtn.addEventListener('click', function(){
        e.target.parentElement.firstChild.innerText = input.value;
      
        addbutton.style.display = 'flex';
        updatebtn.style.display = 'none';
     
      });
      
    });
    
    
    deletbtn.addEventListener("click", function (event) {
      event.target.parentElement.remove();
    })

    tasksList.appendChild(task);
   
   
  }
});


