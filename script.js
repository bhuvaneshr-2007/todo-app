function addTask(){
  let input = document.getElementById("taskInput");
  let task = input.value;

  if(task === ""){
    alert("Enter something!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = task;

  // Mark complete
  li.onclick = function(){
    li.style.textDecoration = "line-through";
  };

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = function(){
    li.remove();
  };

  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}