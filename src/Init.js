document.addEventListener('init', function(event)
{
  if (localStorage.getItem("bmr") === null) {
    $("#settings-dialog").show();
    globalWeight = 85;
  }

  var myDate = new Date();
  var objBMR = localStorage.getItem("bmr");
  var jsonObjBMR= JSON.parse(objBMR);

  if(jsonObjBMR != null){
    globalBMR += jsonObjBMR.bmr;
    globalWantedKcals += jsonObjBMR.wantedKcal;
    globalWeight += jsonObjBMR.weight;
  }

  var obj = localStorage.getItem("totals");
  var jsonObj = JSON.parse(obj);

  if(jsonObj != null){
    globalBreakFastTotal += jsonObj.bftotal;
    globalLunchTotal += jsonObj.lunchTotal;
    globalDinnerTotal += jsonObj.dinnerTotal;
    globalActivitiesTotal += jsonObj.activitiesTotal;
    globalTotalKcals += (globalBreakFastTotal + globalLunchTotal + globalDinnerTotal) + globalActivitiesTotal;
    globalProts += jsonObj.protsTotal;
    globalFats += jsonObj.fatsTotal;
    globalCarbs += jsonObj.carbsTotal;
    globalFibre += jsonObj.fibreTotal;
    document.getElementById("bftotal").innerHTML = jsonObj.bftotal;
    document.getElementById("lunchtotal").innerHTML = jsonObj.lunchTotal;
    document.getElementById("dinnertotal").innerHTML = jsonObj.dinnerTotal;
    document.getElementById("totalKcal").innerHTML = globalTotalKcals;
    document.getElementById("activitiesTotal").innerHTML = jsonObj.activitiesTotal;
  }
  showMeals();

});

