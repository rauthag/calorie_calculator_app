function removeAll()
{
  localStorage.clear();
  $("#mealList1").empty();
  $("#mealList2").empty();
  $("#mealList3").empty();
  $("#mealList4").empty();
  globalBreakFastTotal = 0;
  globalLunchTotal = 0;
  globalDinnerTotal = 0;
  globalTotalKcals = 0;
  globalActivitiesTotal = 0;
  document.getElementById("bftotal").innerHTML = 0;
  document.getElementById("lunchtotal").innerHTML = 0;
  document.getElementById("dinnertotal").innerHTML = 0;
  document.getElementById("activitiesTotal").innerHTML = 0;
  document.getElementById("totalKcal").innerHTML = 0;
  window.location.reload();
}