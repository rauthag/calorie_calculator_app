function removeItem(id)
{
  globalID = id.toString();
  var itemToDelete = globalID;
  var objM = localStorage.getItem(itemToDelete);
  var jsonObjM = JSON.parse(objM);

  var obj = localStorage.getItem("totals");
  var jsonObj = JSON.parse(obj);

  if(jsonObjM.typeOfItem === 'meal'){
    globalProts -= jsonObjM.prots;
    globalFats -= jsonObjM.fats;
    globalCarbs -= jsonObjM.carbs;
    globalFibre -= jsonObjM.fibre;
  }

  if(jsonObjM.typeOfItem === 'activity' ){
    globalActivitiesTotal -= jsonObjM.totalKcals;
  }
  if(jsonObjM.when === 1 && jsonObjM.typeOfItem === 'meal') {
    globalBreakFastTotal -= jsonObjM.totalKcals;
  }
  if(jsonObjM.when === 2 && jsonObjM.typeOfItem === 'meal') {
    globalLunchTotal -= jsonObjM.totalKcals;
  }
  if(jsonObjM.when === 3 && jsonObjM.typeOfItem === 'meal') {
    globalDinnerTotal -= jsonObjM.totalKcals;
  }


  var totalsAsObject = {bftotal:globalBreakFastTotal, lunchTotal:globalLunchTotal, dinnerTotal:globalDinnerTotal, activitiesTotal:globalActivitiesTotal,
    protsTotal:globalProts, carbsTotal:globalCarbs, fatsTotal:globalFats, fibreTotal:globalFibre};

  localStorage.setItem("totals", JSON.stringify(totalsAsObject));

  var obj = localStorage.getItem("totals");
  var jsonObj = JSON.parse(obj);

  document.getElementById("bftotal").innerHTML = jsonObj.bftotal;
  document.getElementById("lunchtotal").innerHTML = jsonObj.lunchTotal;
  document.getElementById("dinnertotal").innerHTML = jsonObj.dinnerTotal;
  document.getElementById("activitiesTotal").innerHTML = jsonObj.activitiesTotal;
  document.getElementById("totalKcal").innerHTML = jsonObj.bftotal + jsonObj.lunchTotal + jsonObj.dinnerTotal + jsonObj.activitiesTotal;

  console.log(jsonObj.bftotal);
  localStorage.removeItem(itemToDelete);

  window.location.reload();
}