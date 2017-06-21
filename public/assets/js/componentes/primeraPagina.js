'use strict'

const PrimeraPagina = () => {
  const divSection = $('<div></div>');
  const rowSlider = $('<div class="row"></div>');
  const colSlider = $('<div class="col s12" id="colSlider"></div>');
  const divSlider = $('<div id="divSlider"></div>');
  const ImgSlider = $('<img src="img/icons/img-1.png">');

  const divTextSlider = $('<div id="divTextSlider"></div>');
  const h5 = $('<h5>'+'Paga a tus amigos'+'</h5>')
  const p = $('<p>'+'Paga a quien quieras desde donde'+'<br>'+' quieras, sin usar efectivo'+'</p>');


  const rowGuiador = $('<div class="row"></div>');
  const colGuiador = $('<div class="col s12" id="colGuiador"></div>');
  const guia1 =  $('<div class="guia" id="0"></div>');
  const guia2 =  $('<div class="guia" id="1"></div>');
  const guia3 =  $('<div class="guia" id="2"></div>');

  const rowBtn = $('<div class="row"></div>');
  const colBtn = $('<div class="col s12" id="colBtn"></div>');
  const btn = $('<a class="waves-effect waves-light btn" id="btn">REGISTRAME</a>');

  divSlider.append(ImgSlider);
  divTextSlider.append(h5);
  divTextSlider.append(p);
  colSlider.append(divSlider);
  colSlider.append(divTextSlider);
  rowSlider.append(colSlider);
  divSection.append(rowSlider);

  colGuiador.append(guia1);
  colGuiador.append(guia2);
  colGuiador.append(guia3);
  rowGuiador.append(colGuiador);
  divSection.append(rowGuiador);

  colBtn.append(btn);
  rowBtn.append(colBtn);
  divSection.append(rowBtn);

  btn.on('click',(e) => {
    e.preventDefault();
    divSection.empty();
    divSection.append(SegundaPagina());
  });

  return divSection;
};

const SegundaPagina = () => {
  const divSection = $('<div></div>');
  const rowPhone = $('<div class="row"></div>');
  const colPhone = $('<div class="col s12" id="colPhone"></div>');
  const divPhone = $('<div id="divPhone"></div>');
  const ImgPhone = $('<img src="img/icons/phone.png">');

  const divTexto = $('<div id="divTexto"></div>');
  const h5 = $('<h5 class="h5">Para comenzar validemos tu número</h5>')
  const p = $('<p class="p">Recibirás un SMS con un código de validación</p>');

  const rowInput = $('<div class="row"></div>');
  const colInput = $('<div class="col s12" id="colInput"></div>');
  const divInput = $('<div id="divInput"></div>');
  const icon = $('<img src="img/icons/phoneandnumber.png" >')
  const input = $('<input type="text" id="Phone" placeholder="Ingrese número de celular">');
  const check = $('<input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" disabled/>');
  const label = $('<label for="filled-in-box">Acepta los <span>Términos y condiciones</span></label>');




  const rowBtn = $('<div class="row"></div>');
  const colBtn = $('<div class="col s12" id="colBtn"></div>');
  const btn = $('<a class="waves-effect waves-light btn btn" id="btn2" disabled>CONTINUAR</a>');

    divPhone.append(ImgPhone);

    divTexto.append(h5);
    divTexto.append(p);

    divInput.append(icon);
    divInput.append(input);
    divInput.append(check);
    divInput.append(label);

    colInput.append(divInput);
    rowInput.append(colInput);

    colPhone.append(divPhone);
    colPhone.append(divTexto);
    rowPhone.append(colPhone);

    colBtn.append(btn);
    rowBtn.append(colBtn);

    divSection.append(rowPhone);
    divSection.append(rowInput);
    divSection.append(rowBtn);

    input.on("keyup",_ => {
            if( !(/^\d{9}$/.test(input.val())) ){
              input.css("border-bottom","1px solid red")
               //alert("Ingrese TELEFONO correcto");
            }
            else{
              input.css("border-bottom","1px solid #9e9e9e")
              check.removeAttr("disabled");
              btn.removeAttr("disabled");
            }
        });


    btn.on('click',(e) => {
      e.preventDefault();
      divSection.empty();
      divSection.append(TerceraPagina());
    });

    return divSection;
}

const TerceraPagina = () => {
  const divSection = $('<div></div>');
  const rowSms = $('<div class="row"></div>');
  const colSms = $('<div class="col s12" id="colPhone"></div>');
  const divSms = $('<div id="divPhone"></div>');
  const ImgSms = $('<img src="img/icons/message.png">');

  const divTextoSms = $('<div id="divTextoSms"></div>');
  const h5 = $('<h5 class="h5">Ahora ingresa tu código</h5>')
  const p = $('<p class="p">Enviamos un sms con el codigo de validacion<br> al número <span>997528963</span></p>');

  const rowInput = $('<div class="row"></div>');
  const colInput = $('<div class="col s12" id="colInput"></div>');
  const divInputSms = $('<div id="divInputSms"></div>');
  const icon = $('<img src="img/icons/lock.png" >')
  const input = $('<input type="text" id="Phone">');
  const pSms = $('<p class="p">Reintentar en</p>');
  const iconTime = $('<img src="img/icons/clock.png" id="iconTime" >')

  divSms.append(ImgSms);

  divTextoSms.append(h5);
  divTextoSms.append(p);

  colSms.append(divSms);
  colSms.append(divTextoSms);
  rowSms.append(colSms);

  divInputSms.append(icon);
  divInputSms.append(input);
  divInputSms.append(pSms);
  divInputSms.append(iconTime);
  colInput.append(divInputSms);
  rowInput.append(colInput);


  divSection.append(rowSms);
  divSection.append(rowInput);

  input.on("keyup",(e) => {
          if( !(/^\d{5}$/.test(input.val())) ){
            input.css("border-bottom","1px solid red")
          }
          else{
            input.css("border-bottom","1px solid #9e9e9e");
            e.preventDefault();
            divSection.empty();
            divSection.append(CuartaPagina());
          }
      });
  return divSection;

}


const CuartaPagina = () => {
  const divSection = $('<div></div>');
  const rowSms = $('<div class="row"></div>');
  const colSms = $('<div class="col s12" id="colPhone"></div>');
  const divSms = $('<div id="divPhone"></div>');
  const ImgSms = $('<img src="img/icons/lockone.png">');

  const divTextoSms = $('<div id="divTextoSms"></div>');
  const h5 = $('<h5 class="h5">Crea tu usuario Yape</h5>')
  const p = $('<p class="p">Ingresa un nombre, email y clave de usuario</p>');

  const rowForm = $('<div class="row"></div>');
  const colForm = $('<div class="col s12" id="colInput"></div>');
  const divInputNombre = $('<div id="divInputSms"></div>');
  const iconNombre = $('<img src="img/icons/user.png" >')
  const inputNombre = $('<input type="text" id="Phone" placeholder="Nombre">');


  const divInputCorreo = $('<div id="divInputSms"></div>');
  const iconCorreo = $('<img src="img/icons/message-gray.png" >')
  const inputCorreo = $('<input type="text" id="Phone" placeholder="correo@ejemplo.com">');


  const divInputClave = $('<div id="divInputSms"></div>');
  const iconClave = $('<img src="img/icons/lock.png" >')
  const inputClave = $('<input type="password" id="Phone" placeholder="Ingrese clave de 6 digitos">');
  const pForm = $('<p id="pForm">Cuida esta clave como oro, es tu acceso a <br>Yape</p>');

  const rowBtn = $('<div class="row"></div>');
  const colBtn = $('<div class="col s12" id="colBtn"></div>');
  const btn = $('<a class="waves-effect waves-light btn btn" id="btn2" disabled>CREAR CUENTA</a>');



  divSms.append(ImgSms);
  rowSms.append(colSms);

  divTextoSms.append(h5);
  divTextoSms.append(p);

  colSms.append(divSms);
  colSms.append(divTextoSms);


  rowForm.append(colForm);
  colForm.append(divInputNombre);
  colForm.append(divInputCorreo);
  colForm.append(divInputClave);
  divInputNombre.append(iconNombre);
  divInputNombre.append(inputNombre);
  divInputCorreo.append(iconCorreo);
  divInputCorreo.append(inputCorreo);
  divInputClave.append(iconClave);
  divInputClave.append(inputClave);
  divInputClave.append(pForm);

  rowBtn.append(colBtn);
  colBtn.append(btn);

  divSection.append(rowSms);
  divSection.append(rowForm);
  divSection.append(rowBtn);

  //VALIDANDO EMAIL

  inputClave.on("keyup",(e) => {
          if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(inputClave.val())) ){
            inputClave.css("border-bottom","1px solid red")
          }
          else{
            input.css("border-bottom","1px solid #9e9e9e");
            e.preventDefault();
            //divSection.empty();
            //divSection.append(CuartaPagina());
          }
      });


  return divSection;
}
