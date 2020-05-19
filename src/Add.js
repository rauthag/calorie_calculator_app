function addMeal()
{
  location.reload();
  var myDate = new Date();
  var myKey = myDate.getTime();


  var mealName = $("#mealName").val();
  var mealKcals = $("#mealKcals").val();
  var mealAmount = $("#mealAmount").val();
  var mealProts = $("#mealProts").val();
  var mealFats = $("#mealFats").val();
  var mealCarbs = $("#mealCarbs").val();
  var mealFibre = $("#mealFibre").val();
  var typeOfItem = $("#typeOfItem").val();

  console.log(weight);

  var totalKcals;

  if(typeOfItem === 'activity'){
    totalKcals = ((mealKcals * 0.0175) * (globalWeight) * (mealAmount)).toPrecision(3);
  } else{
    totalKcals = (mealKcals * (mealAmount / 100)).toPrecision(3);
  }



  mealFats = (mealFats * (mealAmount / 100)).toPrecision(3);
  mealCarbs = (mealCarbs * (mealAmount / 100)).toPrecision(3);
  mealFibre = (mealFibre * (mealAmount / 100)).toPrecision(3);
  mealProts = (mealProts * (mealAmount / 100)).toPrecision(3);

  var taskAsObject = {mealName:mealName, when:globalWhen, kcals:mealKcals, totalKcals: totalKcals, amount:mealAmount, typeOfItem:typeOfItem,
                      prots:mealProts, carbs:mealCarbs, fats:mealFats, fibre:mealFibre };
  var taskAsJSON = JSON.stringify(taskAsObject);

  if(mealName.length)
  {
    localStorage.setItem(myKey, taskAsJSON);
  }

  if(typeOfItem === 'meal'){
    globalProts = globalProts + parseFloat(mealProts,2);
    globalFats = globalFats + parseFloat(mealFats,2);
    globalCarbs = globalCarbs + parseFloat(mealCarbs,2);
    globalFibre = globalFibre + parseFloat(mealFibre,2);

    if(globalWhen === 1){
      globalBreakFastTotal = globalBreakFastTotal + parseFloat(totalKcals,2);
    }
    if(globalWhen === 2){
      globalLunchTotal = globalLunchTotal + parseFloat(totalKcals,2);
    }
    if(globalWhen === 3){
      globalDinnerTotal = globalDinnerTotal + parseFloat(totalKcals,2);
    }
  } else {
      globalActivitiesTotal  = globalActivitiesTotal + parseFloat(totalKcals,2);
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

  document.getElementById("mealKcals").value = '';
  document.getElementById("typeOfItem").value = '';

  showMeals();
  closeDialog();
  closeMealDialog();


}