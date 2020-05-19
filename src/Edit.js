function editTask()
{

  var myKey = globalID;

  var todoText = $("#currentTaskName").val();
  var todoDate = $("#currentDate").val();
  var todoNotes = $("#currentNotes").val();
  var todoPriority = globalPriority;

  var switchVib = document.getElementById("currentSwitch");
  var isVib = switchVib.checked;
  var volume = document.getElementById('current_range_1').value;

  var taskAsObject = {text:todoText, date:todoDate, notes:todoNotes, priority:todoPriority, vibration:isVib, volume:volume};
  var taskAsJSON = JSON.stringify(taskAsObject);

  if(todoText.length)
  {
    localStorage.setItem(myKey, taskAsJSON);
  }


  showMeals();
  closeItemClick()
}