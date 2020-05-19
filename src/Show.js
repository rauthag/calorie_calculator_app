function showMeals()
{
  $("#mealList1").empty();
  $("#mealList2").empty();
  $("#mealList3").empty();
  $("#mealList4").empty();

  for (var i = 0; i < localStorage.length; i++)
  {
    var myKey = localStorage.key(i);

    var onsItem = document.createElement('ons-list-item');
    var expContent = document.createElement('div');

    var deleteButt = document.createElement('span');
    deleteButt.setAttribute('onclick', "removeItem("+myKey+")");
    deleteButt.innerHTML  = '<ons-button modifier="quiet" style="padding: 2px; background-color: rgb(255,152,163); cursor: pointer; top:10%; left: 90%; position: absolute; border-radius: 15%;"">' +
        '<ion-icon name="trash" style="font-size: 140%; color: white !important;"></ion-icon></ons-button>';

    var obj = localStorage.getItem(myKey);
    var jsonObj = JSON.parse(obj);

    expContent.setAttribute('class',"expandable-content");

    onsItem.innerHTML  = "<span style='text-align:left;'>" +  jsonObj.mealName + "</span>" + "<span style='margin-left:6%;'>" +  parseFloat(jsonObj.totalKcals)+ " kcal" + "</span>";
    onsItem.innerHTML +=  "<span style='font-size:80%; color:dimgray; margin-left:6%;'>" +  parseFloat(jsonObj.amount) + 'g' + "</span>";


    onsItem.setAttribute('expandable', "");
    onsItem.setAttribute('modifier', "tappable");

    onsItem.appendChild(deleteButt);
    onsItem.append(expContent);

    expContent.innerHTML = "<div style='font-size: 90%; margin-top: -1%;'><b style='color:darkgreen'>" +  "Kcal/100g:" + "</b>" +"  "+ parseFloat(jsonObj.kcals) + "  " +
                            "<b style='color:lightseagreen; margin-left:1%;'>" + "  " + "Bielkoviny: " +"</b>"  + parseFloat(jsonObj.prots) + "g" +
                            "<b style='color:#9bd75d; margin-left:1%;'>" + "  " + "Sacharidy: " +"</b>"  + parseFloat(jsonObj.carbs) + "g" +
                            "<b style='color:#cbc658; margin-left:1%;'>" + "  " + "Tuky: " +"</b>"  + parseFloat(jsonObj.fats) + "g" +
                            "<b style='color:#64BB6A; margin-left:1%;'>" + "  " + "Vláknina: " +"</b>"  + parseFloat(jsonObj.fibre) + "g" + "</div>";

    var mealList1 = document.getElementById('mealList1');
    var mealList2 = document.getElementById('mealList2');
    var mealList3 = document.getElementById('mealList3');
    var mealList4 = document.getElementById('mealList4');

    if(jsonObj.when === 1 && (jsonObj.typeOfItem !== 'activity')){
      mealList1.appendChild(onsItem);
    }
    if(jsonObj.when === 2 && (jsonObj.typeOfItem !== 'activity')){
      mealList2.appendChild(onsItem);
    }
    if(jsonObj.when === 3 && (jsonObj.typeOfItem !== 'activity')){
      mealList3.appendChild(onsItem);
    }
    if(jsonObj.when === 4 || (jsonObj.typeOfItem === 'activity')){
      mealList4.appendChild(onsItem);
    }

  }


}