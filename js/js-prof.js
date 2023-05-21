window.addEventListener('DOMContentLoaded', function() {
  var randomNumber = Math.floor(Math.random() * 42112) + 1;
  var divContainer = document.getElementById('doc');
  divContainer.textContent = "Код бронирования: "+ randomNumber;
});


window.addEventListener('DOMContentLoaded', function() {
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  var spanContainer = document.getElementById('pol');
  spanContainer.textContent = "Полетов: "+ randomNumber;
});


window.addEventListener('DOMContentLoaded', function() {
  var randomNumber = Math.floor(Math.random() * 30) + 1;
  var randomNumber2 = Math.floor(Math.random() * 12) + 1;
  var divContainer = document.getElementById('kogda');
  if(randomNumber < 10 && randomNumber2 < 10)
  {
  divContainer.textContent = "Дата вылета: 0"+ randomNumber +".0"+randomNumber2+"."+"2023";
  }
  else if(randomNumber < 10 && randomNumber2 >= 10)
  {
    divContainer.textContent = "Дата вылета: 0"+ randomNumber +"."+randomNumber2+"."+"2023";
  }
  else if(randomNumber >= 10 && randomNumber2 < 10)
  {
    divContainer.textContent = "Дата вылета: "+ randomNumber +".0"+randomNumber2+"."+"2023";
  }
  else
  {
    divContainer.textContent = "Дата вылета: "+ randomNumber +"."+randomNumber2+"."+"2023";
  }
  var rN1 = Math.floor(Math.random() * 30) + 1;
  var rN2 = Math.floor(Math.random() * 12) + 1;
  while(rN1 <= randomNumber)
  {
  var rN1 = Math.floor(Math.random() * 30) + 1;
  }
  while(rN2 <= randomNumber2)
  {
    var rN2 = Math.floor(Math.random() * 12) + 1;
  }
  var divContainer = document.getElementById('togda');
  if(rN1 < 10 && rN2 < 10)
  {
  divContainer.textContent = "Дата прилета: 0"+ rN1 +".0"+rN2+"."+"2023";
  }
  else if(rN1 < 10 && rN2 >= 10)
  {
    divContainer.textContent = "Дата прилета: 0"+ rN1 +"."+rN2+"."+"2023";
  }
  else if(rN1 >= 10 && rN2 < 10)
  {
    divContainer.textContent = "Дата прилета: "+ rN1 +".0"+rN2+"."+"2023";
  }
  else
  {
    divContainer.textContent = "Дата прилета: "+ rN1 +"."+rN2+"."+"2023";
  }

});

