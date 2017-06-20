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
  const btn = $('<a class="waves-effect waves-light btn" id="btn">Registrame</a>');

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


  return divSection;
};
