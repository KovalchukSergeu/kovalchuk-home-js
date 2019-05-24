var arrForm = [{
  label: 'Разработчики:',
  type: 'text',
  id: 'name-dev'
}, {
  label: 'Название сайта:',
  type: 'text',
  id: 'name'
}, {
  label: 'URL сайта:',
  type: 'url',
  id: 'url'
}, {
  label: 'Дата запуска сайта:',
  type: 'date',
  id: 'date-start'
}, {
  label: 'Посетителей в сутки:',
  type: 'text',
  id: 'number-visit'
}, {
  label: 'E-mail для связи:',
  type: 'email',
  id: 'email'
}, {
  label: 'Рубрика каталога:',
  type: 'select',
  id: 'rubric',
  optionValue: ['бытовая техника', 'домашний уют', 'здоровье']
}, {
  label: 'Размещение:',
  type: 'radio',
  id: 'location',
  radioValue: ['платное', 'бесплатное', 'VIP']
}, {
  label: 'Разрешить отзывы:',
  type: 'checkbox',
  id: 'allow-review'
}, {
  label: 'Описание сайта:',
  type: 'textarea',
  id: 'description-site'
}, {
  label: 'Опубликовать',
  type: 'submit',
  id: 'submit'
}];

getForm('myForm', arrForm);

function getForm(nameForm, arrData) {
  var form = document.forms[nameForm];
  var cloneForm = form.cloneNode();
  for (let i = 0; i < arrData.length; i++) {
    var lineBreak = document.createElement('br');
    if (arrData[i]['type'] !== 'submit') {
      cloneForm.appendChild(getFormLabel(arrData[i]));
    }
    switch (arrData[i]['type']) {
      case 'textarea':
        cloneForm.appendChild(getFormTextarea(arrData[i]));
        cloneForm.appendChild(lineBreak);
        break;
      case 'select':
        cloneForm.appendChild(getFormSelect(arrData[i]));
        cloneForm.appendChild(lineBreak);
        break;
      case 'radio':
        var divRadio = document.createElement('div');
        cloneForm.appendChild(divRadio);
        for (let j = 0; j < arrData[i]['radioValue'].length; j++) {
          var labelRadio = divRadio.appendChild(getFormLabelRadio(arrData[i], j));
          labelRadio.appendChild(getFormRadio(arrData[i], j));
          var textNodeLabel = document.createTextNode(arrData[i]['radioValue'][j]);
          labelRadio.appendChild(textNodeLabel);
          form.appendChild(lineBreak);
        }
        break;
      default:
        cloneForm.appendChild(getFormInput(arrData[i]));
        cloneForm.appendChild(lineBreak);
        break;
    }
  }

  document.body.replaceChild(cloneForm, form);

  function getFormInput(hashData) {
    var input = document.createElement('input');
    input.type = hashData['type'];
    input.id = hashData['id'];
    return input;
  }

  function getFormLabel(hashData) {
    var label = document.createElement('label');
    label.htmlFor = hashData['id'];
    label.innerHTML = hashData['label'];
    return label;
  }

  function getFormTextarea(hashData) {
    var textArea = document.createElement('textarea');
    textArea.type = hashData['type'];
    textArea.id = hashData['id'];
    return textArea;
  }

  function getFormSelect(hashData) {
    var input = document.createElement('select');
    for (let i = 0; i < hashData['optionValue'].length; i++) {
      var crOption = document.createElement('option');
      crOption.innerHTML = hashData['optionValue'][i];
      input.appendChild(crOption);
      input.type = hashData['type'];
      input.id = hashData['id'];
    }
    return input;
  }

  function getFormRadio(hashData, index) {
    var radio = document.createElement('input');
    radio.name = hashData['id'];
    radio.type = hashData['type'];
    radio.value = hashData['radioValue'][index];
    radio.id = hashData['id'];
    return radio;
  }

  function getFormLabelRadio(hashData, index) {
    var label = document.createElement('label');
    label.htmlFor = hashData['radioValue'][index];
    label.id = hashData['id'];
    return label;
  }
}
