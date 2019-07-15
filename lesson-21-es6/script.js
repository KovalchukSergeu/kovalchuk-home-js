var ajaxHandlerScript = "http://fe.it-academy.by/AjaxStringStorage2.php";
var updatePassword;
var stringName = 'KOVALCHUK_Encyclopedia';
let context = null;
let userName = null;
// let words = [{'title': 'Верблюд', 'url': 'camel'},{'title': 'Зебра', 'url': 'zebra'},{'title': 'Крокодил', 'url': 'crocodile'},{'title': 'Леопард', 'url': 'leopard'},{'title': 'Черепаха', 'url': 'turtle'},{'title': 'Удав', 'url': 'boa'}];
let words = null;

//AJAX
restoreInfo();

function restoreInfo() {
  $.ajax(
    {
      url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
      data: {f: 'READ', n: stringName},
      success: loadPage, error: errorHandler,
    }
  );
}

function readReady(callresult) {
  if (callresult.error != undefined)
    alert(callresult.error);
  else if (callresult.result != "") {
    words = JSON.parse(callresult.result);
  }
}

function updateAJAX(arr) {
  $.ajax({
      url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
      data: {f: 'UPDATE', n: stringName, v: JSON.stringify(arr), p: updatePassword},
      success: updateReady, error: errorHandler
    }
  );
}

function storeInfo() {
  updatePassword = Math.random();
  $.ajax({
      url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
      data: {f: 'LOCKGET', n: stringName, p: updatePassword},
      success: updateReady, error: errorHandler
    }
  );
}

function updateReady(callresult) {
  if (callresult.error != undefined)
    alert(callresult.error);
}

function errorHandler(jqXHR, statusStr, errorStr) {
  alert(statusStr + ' ' + errorStr);
}

// storeInfo();
// updateAJAX(words);

// SPA
function loadPage(callresult) {
  if (callresult.error != undefined)
    alert(callresult.error);
  else if (callresult.result != "") {
    words = JSON.parse(callresult.result);
  }
  window.onhashchange = SwitchToStateFromURLHash;//при изменении закладки(якоря,хэша)
  var SPAStateH = {};

  function SwitchToStateFromURLHash() {
    var URLHash = window.location.hash;//закладка(якорь, хэш)
    var StateJSON = decodeURIComponent(URLHash.substr(1));//получаем якорь
    if (StateJSON != "")
      UpdateToState(StateJSON); // если JSON непустой, читаем из него состояние и отображаем
    else
      UpdateToState('main'); // иначе показываем главную страницу
  }

  function UpdateToState(NewStateH) {
    SPAStateH = NewStateH; // устанавливаем - это теперь текущее состояние
    var pageHTML = "";
    switch (SPAStateH) {
      case 'main':
        pageHTML += "<div class='wrapper'>";
        pageHTML += "<div><h1>Энциклопедия</h1>";
        pageHTML += "<input type='text' value='Перейти к оглавлению' onclick='SwitchToListPage()'>";
        pageHTML += "</div></div>";
        break;
      case 'list':
        pageHTML += "<div class='wrapper'>";
        pageHTML += setList(words);
        pageHTML += "</div>";
        break;
      case 'camel':
        pageHTML += "<div class='wrapper'>";
        pageHTML += "<div class='left'>";
        pageHTML += setInput(words);
        pageHTML += "</div><div class='right'>";
        pageHTML += "<h1>Верблюд</h1><span>Верблюд (C. Bactrianus) – животное, которое хорошо приспособлено к жизни в пустыне. Его даже называют «кораблем пустыни». Густой мех предназначен для защиты от дневной жары и ночного холода. Широкие двупалые ступни – для передвижения по сыпучим пескам или мелким камням.</span>";
        pageHTML += "</div>";
        break;
      case 'zebra':
        pageHTML += "<div class='wrapper'>";
        pageHTML += "<div class='left'>";
        pageHTML += setInput(words);
        pageHTML += "</div><div class='right'>";
        pageHTML += "<h1>Зебра</h1><span>Зебры (Perissodactyla) – дикие африканские лошади. Отличаются своеобразной окраской тела – их украшают темные и светлые полосы. Эта окраска, кажущаяся на фотографиях яркой, в действительности делает зебр малозаметными, особенно в саваннах. Телосложением некоторые зебры напоминают ослов, другие похожи на лошадей. Грива короткая, хвост с кисточкой на конце.</span>";
        pageHTML += "</div>";
        break;
      case 'crocodile':
        pageHTML += "<div class='wrapper'>";
        pageHTML += "<div class='left'>";
        pageHTML += setInput(words);
        pageHTML += "</div><div class='right'>";
        pageHTML += "<h1>Крокодил</h1><span>Крокодил (Crocodylus) занимает особое положение среди животных. Это близкий родственник вымерших динозавров, которые жили много миллионов лет назад.</span>";
        pageHTML += "</div>";
        break;
      case 'leopard':
        pageHTML += "<div class='wrapper'>";
        pageHTML += "<div class='left'>";
        pageHTML += setInput(words);
        pageHTML += "</div><div class='right'>";
        pageHTML += "<h1>Леопард</h1><span>Леопард – самый грозный… И самый умный. Самый красивый… И самый свирепый. Самый ловкий и самый проворный. И один из самых сильных. Из всех хищников он, что называется, самый-самый. Леопард – он же пантера, барс – ближайший родственник тигра. И во многом превосходит даже своего полосатого родича. Ловкость, вошедшая в поговорку, сочетается в нем с чудовищной силой: он втаскивает на дерево добычу в три-четыре раза тяжелее себя!</span>";
        pageHTML += "</div>";
        break;
      case 'turtle':
        pageHTML += "<div class='wrapper'>";
        pageHTML += "<div class='left'>";
        pageHTML += setInput(words);
        pageHTML += "</div><div class='right'>";
        pageHTML += "<h1>Черепаха</h1><span>Черепашки бывают водные (живут в воде) и сухопутные, то есть те, которые живут не в воде, а на суше и не умеют плавать. Например, черепаха балканская (Testudo hermanni) живет в сухих степях и негустых лесах.</span>";
        pageHTML += "</div>";
        break;
      case 'boa':
        pageHTML += "<div class='wrapper'>";
        pageHTML += "<div class='left'>";
        pageHTML += setInput(words);
        pageHTML += "</div><div class='right'>";
        pageHTML += "<h1>Удав</h1><span>Удав (Constrictor constrictor) – красиво окрашенная змея длиною 2–3 метра. Основной цвет – красноватый или кофейный. На этом фоне видны яркие желтые пятна. Впрочем, рисунок на теле удава очень разнообразен. На солнце чешуя удава сверкает сильным металлическим отблеском, струится и переливается при движении. Живет удав в Мексике, Бразилии, Аргентине, Америке. Образ жизни удава в разных частях мира различается.</span>";
        pageHTML += "</div>";
        break;
    }
    document.getElementById('ipage').innerHTML = pageHTML;
  }

  SwitchToStateFromURLHash();
}

function SwitchToMainPage() {
  SwitchToState({pagename: 'main'});
}

function SwitchToListPage() {
  SwitchToState({pagename: 'list'});
}

function SwitchToContentPage(url) {
  location.hash = encodeURIComponent(url);
}

function SwitchToState(NewStateH) {
  location.hash = encodeURIComponent(NewStateH.pagename);
}

// сортируем массив и заполняем оглавление
function setList(arrWords) {
  arrWords.sort(function (a, b) {
    if (a['title'] > b['title']) {
      return 1;
    }
    if (a['title'] < b['title']) {
      return -1;
    }
    return 0;
  });
  var pageStr = '';
  for (let i = 0; i < arrWords.length; i++) {
    if (i == 0) {
      pageStr += '<div class="container"><h2>' + arrWords[i]['title'].charAt(0) + '</h2>' + '<br>';
    } else if (arrWords[i]['title'].charAt(0) !== arrWords[i - 1]['title'].charAt(0)) {
      if (i !== 0) {
        pageStr += '</div>'
      }
      pageStr += '<div class="container"><h2>' + arrWords[i]['title'].charAt(0) + '</h2>' + '<br>';
    }
    pageStr += '<input type=text value="' + arrWords[i]['title'] +
      '" onclick="SwitchToContentPage(\'' + arrWords[i]['url'] + '\')"> <br>';
  }
  return pageStr;
}

// заполняем левую колонку имеющимися пунктами
function setInput(arrWords) {
  arrWords.sort(function (a, b) {
    if (a['title'] > b['title']) {
      return 1;
    }
    if (a['title'] < b['title']) {
      return -1;
    }
    return 0;
  });
  var pageInp = '';
  for (let i = 0; i < arrWords.length; i++) {
    pageInp += '<input type=text value="' + arrWords[i]['title'] +
      '" onclick="SwitchToContentPage(\'' + arrWords[i]['url'] + '\')"> <br>';
  }
  return pageInp;
}

