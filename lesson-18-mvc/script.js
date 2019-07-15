document.querySelector('.btn-input').addEventListener('click', AddNewDrink);
document.querySelector('.btn-get').addEventListener('click', getDrinkValue);
document.querySelector('.btn-delete').addEventListener('click', deleteDrinkValue);
document.querySelector('.btn-list').addEventListener('click', getTheDrinkKeys);
document.querySelector('.btn-input-dish').addEventListener('click', AddNewDish);
document.querySelector('.btn-get-dish').addEventListener('click', getDishValue);
document.querySelector('.btn-delete-dish').addEventListener('click', deleteDishValue);
document.querySelector('.btn-list-dish').addEventListener('click', getTheDishKeys);
//  Напитки
function AddNewDrink() {
  var drinkName = prompt ('Название напитка?');
  var drinkAlco = confirm ('Напиток алкогольный?');
  var drinkAlcoRus = '';
  if (drinkAlco === true){
    drinkAlcoRus = 'да';
  } else {
    drinkAlcoRus = 'нет';
  }
  var drinkContent = prompt ('Состав напитка?');
  var drinkInfo = {'алкогольный': drinkAlcoRus,'состав' : drinkContent};
  DrinkStorage.AddValue(drinkName,drinkInfo);
  DrinkStorage.Store();
}
function getDrinkValue() {
  var drinkName = prompt('Название напитка');
  var drinkNameRes = DrinkStorage.GetValue(drinkName);
  if (drinkNameRes === false || drinkNameRes === undefined) {
    alert('Напитка ' + drinkName + ' нет.');
  } else {
    alert('напиток: ' + drinkName + '\r\nалкогольный: ' + DrinkStorage.info[drinkName].алкогольный + '\r\nсостав: '
      + DrinkStorage.info[drinkName].состав);
  }
}
function deleteDrinkValue () {
  var drinkName = prompt('Какой напиток удалить?');
  alert('Напиток ' + drinkName + ' удален');
  DrinkStorage.Store();
}
function getTheDrinkKeys () {
  var listDrinks = DrinkStorage.GetKeys();
  document.querySelector('.drink-list').textContent = "Напитки: " + listDrinks;
}
//  Блюда
function AddNewDish() {
  var dishName = prompt ('Название блюда?');
  var dishDelic = confirm ('Ваше блюдо считается деликатесом?');
  var dishDelicRus = '';
  if (dishDelic === true) {
    dishDelicRus = 'да';
  } else {
    dishDelicRus = 'нет';
  }
  var dishContent = prompt ('Рецепт блюда?');
  var dishInfo = {'деликатес': dishDelicRus,'рецепт' : dishContent};
  DishStorage.AddValue(dishName,dishInfo);
  DishStorage.Store();
}
function getDishValue() {
  var dishName = prompt('Название блюда');
  var dishNameRes = DishStorage.GetValue(dishName);
  if (dishNameRes === false || dishNameRes === undefined) {
    alert('Блюда ' + dishName + ' нет.');
  } else {
    alert('блюдо: ' + dishName + '\r\nделикатес: ' + DishStorage.info[dishName].деликатес + '\r\nрецепт: '
      + DishStorage.info[dishName].рецепт);
  }
}
function deleteDishValue () {
  var dishName = prompt('Какое блюдо удалить?');
  alert('Блюдо ' + dishName + ' удалено');
  DishStorage.Store();
}
function getTheDishKeys () {
  var listdishs = DishStorage.GetKeys();
  document.querySelector('.dish-list').textContent = "Блюда: " + listdishs;
}
