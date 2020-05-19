function settings()
{
  var weight = $("#weight").val();
  var height = $("#height").val();
  var age = $("#age").val();
  var wantedKcal = $("#wantedKcal").val();

  wantedKcals = (wantedKcal * 1.0);
  var bmr = (10 * weight) + (6.25 * height) - (5*age) + 5;

  var bmrAsObject = {weight:weight, height:height, age:age, bmr:bmr, wantedKcal:wantedKcals };
  var bmrAsJSON = JSON.stringify(bmrAsObject);
  bmr = bmr.toPrecision(3);


  localStorage.setItem("bmr", bmrAsJSON);

  globalBMR += parseFloat(bmr,2);
  globalWantedKcals += parseFloat(bmr,2);
  globalWeight += parseFloat(weight,2);


  location.reload();
  //showMeals();
  //closeDialog();
  //closeMealDialog();
}