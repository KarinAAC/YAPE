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
  const input = $('<input type="text" id="Phone" placeholder="Ingrese número de celular" maxlength="9">');
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
  const input = $('<input type="text" id="Phone" maxlength="5">');
  const pSms = $('<p class="p">Reintentar en</p>');
  const iconTime = $('<img src="img/icons/clock.png" id="iconTime" >');

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

  /*setTimeout(function(){
      input.css("border-bottom","1px solid red");
		  input.empty();
	}, 21000);*/

  input.on("keyup",(e) => {
          if( !(/^\d{5}$/.test(input.val())) ){
            input.css("border-bottom","1px solid red");
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
  const inputCorreo = $('<input type="text" id="Phone" placeholder="correo@ejemplo.com" disabled>');


  const divInputClave = $('<div id="divInputSms"></div>');
  const iconClave = $('<img src="img/icons/lock.png" >')
  const inputClave = $('<input type="password" id="Phone" class="inputClave" placeholder="Ingrese clave de 6 digitos" maxlength="6" disabled>');
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

  //VALIDANDO NOMBRE
  inputNombre.on("keyup",(e) => {
          if( !( /^[a-zA-Z]*$/.test(inputNombre.val())) ){
            inputNombre.css("border-bottom","1px solid red")
          }
          else{
            inputNombre.css("border-bottom","1px solid #9e9e9e");
            inputCorreo.css("border-bottom","1px solid #00c3a3");
            e.preventDefault();
            inputCorreo.removeAttr("disabled");
            //divSection.empty();
            //divSection.append(CuartaPagina());
          }
      });
  //VALIDANDO CORREO
  inputCorreo.on("keyup",(e) => {
          if( !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(inputCorreo.val())) ){
            inputCorreo.css("border-bottom","1px solid red")
          }
          else{
            inputCorreo.css("border-bottom","1px solid #9e9e9e");
            inputClave.css("border-bottom","1px solid #00c3a3");
            e.preventDefault();
            inputClave.removeAttr("disabled");
            //divSection.empty();
            //divSection.append(CuartaPagina());
          }
      });
      //VALIDANDO CLAVE
      inputClave.on("keyup",(e) => {
              if( inputClave.val() == 0 ){
                inputClave.css("border-bottom","1px solid red")
              }
              else{
                inputClave.css("border-bottom","1px solid #9e9e9e");
                e.preventDefault();
                btn.removeAttr("disabled");
                //divSection.empty();
                //divSection.append(CuartaPagina());
              }
          });
          //FUNCION BOTON CREAR CUENTA
          btn.on('click',(e) => {
            e.preventDefault();
            divSection.empty();
            divSection.append(QuintaPagina());
          });


  return divSection;
}

const QuintaPagina = () => {
  $('body').css("background","#fbd43b");
  const divSection = $('<div></div>');
  const rowCheck = $('<div class="row"></div>');
  const colCheck = $('<div class="col s12" id="colPhone"></div>');
  const divCheck = $('<div id="divCheck"></div>');
  const ImgCheck = $('<img src="img/icons/check.png" id="imgCheck">');
  const texto1 = $('<h5 class="center-align">!Bien¡</h5>');
  const texto2 = $('<h5 class="center-align">Ahora puedes usar Yape</h5>');

  divCheck.append(ImgCheck);
  divCheck.append(texto1);
  divCheck.append(texto2);
  colCheck.append(divCheck);
  rowCheck.append(colCheck);
  divSection.append(rowCheck);

  setTimeout(function(){
      $('body').css("background","#fff");
		  divSection.empty();
      divSection.append(SextaPagina());
	}, 3000);


  return divSection;
}

const SextaPagina = () => {
  const divSection = $('<div></div>');
  const rowTarjeta = $('<div class="row"></div>');
  const colTarjeta = $('<div class="col s12" id="colPhone"></div>');
  const divTarjeta = $('<div id="divPhone"></div>');
  const ImgTarjeta = $('<img src="img/icons/bcp-logo.png">');

  const divTexto = $('<div id="divTextoSms"></div>');
  const h5Texto = $('<h5 class="h5">Registra tu tarjeta débito BCP</h5>');
  const p = $('<p class="p">Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles</p>');

  const rowCard = $('<div class="row"></div>');
  const colCard = $('<div class="col s12" id="colInput"></div>');
  const divCard = $('<div id="divInputSms"></div>');
  const iconCard = $('<img src="img/icons/card.png" >')
  const inputCard = $('<input type="text" maxlength="16">');
  const iconScan = $('<img src="img/icons/scan.png" id="iconTime" >');
  const pScan = $('<p class="p" style="color:#00c3a3">Escanear tarjeta</p>');

  const rowFecha = $('<div class="row"></div>');
  const colFecha = $('<div class="col s12" id="colInput"></div>');
  const pFecha = $('<p class="fechaH5">Fecha de vencimiento</p>');
  const inputMes = $('<input type="text" class="fecha" placeholder="Mes" maxlength="2" disabled>');
  const inputAno = $('<input type="text" class="fecha" placeholder="Año" maxlength="2" disabled>');


  const rowBtn = $('<div class="row"></div>');
  const colBtn = $('<div class="col s12" id="colBtn"></div>');
  const btn = $('<a class="waves-effect waves-light btn btn" id="btn2" disabled>CONTINUAR</a>');

  divTarjeta.append(ImgTarjeta);

  divTexto.append(h5Texto);
  divTexto.append(p);

  colTarjeta.append(divTarjeta);
  colTarjeta.append(divTexto);

  rowTarjeta.append(colTarjeta);

  divCard.append(iconCard);
  divCard.append(inputCard);
  divCard.append(pScan);
  divCard.append(iconScan);

  colCard.append(divCard);
  rowCard.append(colCard);


  colFecha.append(pFecha);
  colFecha.append(inputMes);
  colFecha.append(inputAno);
  rowFecha.append(colFecha);


  colBtn.append(btn);
  rowBtn.append(colBtn);

  divSection.append(rowTarjeta);
  divSection.append(rowCard);
  divSection.append(rowFecha);
  divSection.append(rowBtn);

//VALIDANDO TARJETA DE CREDITO
  inputCard.on("keyup",(e) => {
          if( !(/^\d{16}$/.test(inputCard.val())) ) {
            inputCard.css("border-bottom","1px solid red")
          }
          else{
            inputCard.css("border-bottom","1px solid #9e9e9e");
            inputMes.css("border-bottom","1px solid #00c3a3");
            e.preventDefault();
            inputMes.removeAttr("disabled");
            //divSection.empty();
            //divSection.append(CuartaPagina());
          }
      });


  //VALIDANDO MES
  inputMes.on("keyup",(e) => {
          if( !(/[1-9]/g.test(inputCard.val())) ){
            inputMes.css("border-bottom","1px solid red")
          }
          else{
            inputMes.css("border-bottom","1px solid #9e9e9e");
            inputAno.css("border-bottom","1px solid #00c3a3");
            e.preventDefault();
            inputAno.removeAttr("disabled");
            //divSection.empty();
            //divSection.append(CuartaPagina());
          }
      });

      //VALIDANDO AÑO
      inputAno.on("keyup",(e) => {

            if( !(/[1-9]/g.test(inputCard.val())) ){
                    inputAno.css("border-bottom","1px solid red");
              }
              else{
                  inputAno.css("border-bottom","1px solid #9e9e9e");
                  e.preventDefault();
                  btn.removeAttr("disabled");
                //divSection.empty();
                //divSection.append(CuartaPagina());
              }
          });

        //FUNCION BOTON CONTINUAR
        btn.on('click',(e) => {
          e.preventDefault();
          divSection.empty();
          divSection.append(SetimaPagina());
        });


  return divSection;
}

const SetimaPagina = () => {

  const divSection = $('<div></div>');
  const rowTarjeta = $('<div class="row"></div>');
  const colTarjeta = $('<div class="col s12" id="colPhone"></div>');
  const divTarjeta = $('<div id="divPhone"></div>');
  const ImgTarjeta = $('<img src="img/icons/bcp-logo.png">');

  const divTexto = $('<div id="divTextoSms"></div>');
  const h5Texto = $('<h5 class="h5">Ingresa la clave de tu tarjeta</h5>');
  const p = $('<p class="p">Tarjeta ****3263</p>');

  const rowCard = $('<div class="row"></div>');
  const colCard = $('<div class="col s12" id="colInput"></div>');
  const divCard = $('<div id="divInputSms"></div>');
  const iconCard = $('<img src="img/icons/lock.png" >')
  const inputPass = $('<input type="text" maxlength="8">');

  const rowBtn = $('<div class="row"></div>');
  const colBtn = $('<div class="col s12" id="colBtn"></div>');
  const btn = $('<a class="waves-effect waves-light btn btn" id="btn2" disabled>REGISTRAR</a>');

  divTarjeta.append(ImgTarjeta);

  divTexto.append(h5Texto);
  divTexto.append(p);

  colTarjeta.append(divTarjeta);
  colTarjeta.append(divTexto);

  rowTarjeta.append(colTarjeta);

  divCard.append(iconCard);
  divCard.append(inputPass);

  colCard.append(divCard);
  rowCard.append(colCard);

  colBtn.append(btn);
  rowBtn.append(colBtn);

  divSection.append(rowTarjeta);
  divSection.append(rowCard);
  divSection.append(rowBtn);

  inputPass.on("keyup",(e) => {

        if( !(/[1-9]/g.test(inputPass.val())) ){
                inputPass.css("border-bottom","1px solid red");
          }
          else{
              inputPass.css("border-bottom","1px solid #9e9e9e");
              e.preventDefault();
              btn.removeAttr("disabled");
            //divSection.empty();
            //divSection.append(CuartaPagina());
          }
      });

    //FUNCION BOTON CONTINUAR
    btn.on('click',(e) => {
      e.preventDefault();
      divSection.empty();
      divSection.append(OctavaPagina());
    });

  return divSection;
}

const OctavaPagina = () => {

  const divSection = $('<div></div>');
  const rowTarjeta = $('<div class="row" id="rowTarjeta" style="background:#451e36;"></div>');
  const colTarjeta = $('<div class="col s12" id="colPhone"></div>');
  const divTarjeta = $('<div id="divPhone" style="width: 100px;height: 80px;margin: 50px 40px 10px 40px;" ></div>');
  const ImgTarjeta = $('<img src="img/icons/happy-face.png">');

  const divTexto = $('<div id="divTextoSms"></div>');
  const h5Texto = $('<h5 class="center" style="color: #fff;">Hola</h5>');
  const p = $('<p class="p" style="color: #00c3a3;">Mostrar Saldo</p>');

  const rowPublicidad = $('<div class="row" style="background:#38052a;"></div>');
  const colPublicidad1 = $('<div class="col s12" id=""></div>');
  const divPublicidad1 = $('<div id="" style="padding: 10px;border-bottom: 1px solid gray;" ></div>');
  const h5Publicidad1 = $('<h8 class="" style="color: #fff; display:inline-block">ULTIMOS MOMENTOS</h8>');
  const ImgPublicidad1 = $('<img id="imgP1" style="width: 20px; float:right" src="img/icons/DER.png">');


  const colPublicidad2 = $('<div class="col s12" id=""></div>');
  const divPublicidad2 = $('<div id=""></div>');
  const ImgPublicidad2 = $('<img src="img/icons/icon.png" style="width: 97px;margin: 20px;display:inline-block;">');
  const pPublicidad2 = $('<p class="" style="color: #fff;display: inline-block;position: absolute;margin-top: 40px;">¿Aún no realizas tu primer  <br> pago? Es rápido y sencillo</p>');


  const colPublicidad3 = $('<div class="col s12" id=""></div>');
  const divPublicidad3 = $('<div id="divp3" syle="display: inline-block;margin: 50px;text-align: center;"></div>');
  const ImgPublicidad3 = $('<img src="img/icons/send.png" style="width: 65px;">');
  const h6Texto3 = $('<h6 class="" style="color: #fff;">ENVIAR PAGOS</h6>');
  const divPublicidad4 = $('<div id="divp4" syle="display: inline-block;text-align: center;" ></div>');
  const ImgPublicidad4 = $('<img src="img/icons/code.png" style="width: 65px;">');
  const h6Texto4 = $('<h6 class="" style="color: #fff;">RECIBIR PAGO</h6>');



  divTarjeta.append(ImgTarjeta);
  divTexto.append(h5Texto);
  divTexto.append(p);

  colTarjeta.append(divTarjeta);
  colTarjeta.append(divTexto);

  rowTarjeta.append(colTarjeta);

  divPublicidad1.append(h5Publicidad1);
  divPublicidad1.append(ImgPublicidad1);
  colPublicidad1.append(divPublicidad1);
  rowPublicidad.append(colPublicidad1);

  divPublicidad2.append(ImgPublicidad2);
  divPublicidad2.append(pPublicidad2);
  colPublicidad2.append(divPublicidad2);
  rowPublicidad.append(colPublicidad2);

  divPublicidad3.append(ImgPublicidad3);
  divPublicidad3.append(h6Texto3);
  colPublicidad3.append(divPublicidad3);

  divPublicidad4.append(ImgPublicidad4);
  divPublicidad4.append(h6Texto4);
  colPublicidad3.append(divPublicidad4);

  rowPublicidad.append(colPublicidad3);


  divSection.append(rowTarjeta);
  divSection.append(rowPublicidad);

  return divSection;
}
