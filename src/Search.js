const meals = [
  {name: 'Jogurt biely 3,7% Pilos', kcals: 66, prots:4, carbs:6, fats:24, fibre:5, typeOfItem:'meal'},
  {name: 'Jasminová ryža varená', kcals: 278, prots:3, carbs:25, fats:0.2, fibre:4, typeOfItem:'meal'},
  {name: 'Jablko', kcals: 57, prots:0.4, carbs:13, fats:0.5, fibre:3, typeOfItem:'meal'},
  {name: 'Bielkovinový večerný chlieb', kcals: 362, prots:46, carbs:22, fats:8, fibre:11, typeOfItem:'meal'},
  {name: 'Cuketa', kcals: 20, prots:1, carbs:3, fats:0.3, fibre:1, typeOfItem:'meal'},
  {name: 'Beh', kcals: -4, typeOfItem:'activity'},
  {name: 'Cyklistika', kcals: -5, typeOfItem:'activity'}
];

var activityBlock = '<ons-input id="mealAmount" modifier="underbar" autocomplete=\'off\' placeholder="Dĺžka aktivity v minútach" style="width: 50%" float="">' +
    '<input type="number" autocomplete=\'off\' class="text-input text-input--underbar">' +
    '<p></ons-input>';



window.onload=function(){
  const searchInput = document.querySelector('.search-input');
  const suggestionsPanel = document.querySelector('.suggestions');
  const suggDetailPanel = document.querySelector('.suggestions');

  searchInput.addEventListener('keyup', function(e) {

    suggestionsPanel.classList.add('show');
    const input = searchInput.value;
    suggestionsPanel.innerHTML = '';
    suggDetailPanel.innerHTML = '';
    const suggestions = meals.filter(function(meal) {
      return meal.name.toLowerCase().startsWith(input.toLowerCase());
    });
    suggestions.forEach(function(suggested) {
      const div = document.createElement('div');
      div.innerHTML = suggested.name;
      div.setAttribute('class','suggestion');
      suggestionsPanel.appendChild(div);
    });
    if (input === '') {
      suggestionsPanel.innerHTML = '';
    }
  })

  document.addEventListener('click', function(e){
    if(e.target.className === 'suggestion'){
      searchInput.value = e.target.innerHTML;
      document.getElementById("mealName").value = searchInput.value;
      suggestionsPanel.classList.remove('show');

      for(var i = 0; i < meals.length; i++){
        if(meals[i].name === searchInput.value){
          document.getElementById("mealKcals").value = meals[i].kcals;
          document.getElementById("typeOfItem").value = meals[i].typeOfItem;
          document.getElementById("mealProts").value = meals[i].prots;
          document.getElementById("mealFats").value = meals[i].fats;
          document.getElementById("mealCarbs").value = meals[i].carbs;
          document.getElementById("mealFibre").value = meals[i].fibre;

          if(meals[i].typeOfItem === 'activity'){
            console.log('aktivita');
            document.getElementById("typeOfAdd").innerHTML = activityBlock;
          }
        }
      }

      div.setAttribute('class','suggestion');
    }
  });
};