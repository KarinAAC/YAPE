'use strict'
//ARREGLO DE IMAGENES DEL SLIDER
var arregloSlide = ['img/icons/img-1.png','img/icons/img-2.png','img/icons/img-3.png'];
var arregloh5 = ['Paga a tus amigos','Sin número de cuenta','Gratis y seguro'];
var arregloP = ['Paga a quien quieras desde donde<br>quieras, sin usar efectivo','Elige a quien pagar desde tu lista<br>de contactos','La transferencia es inmediata y<br>gratuita de una cuenta a otra'];

var indexSlider = 0;
//
const render = (container) => {
  container.empty();
  const containerFluid = $('<div class="container-fluid"></div>');

  //APPEND DE COMPONENTES
  containerFluid.append(PrimeraPagina());

  container.append(containerFluid);

};

//FUNCION AVANZAR SLIDER
function avanzarSlider() {
	indexSlider++;

	if(indexSlider >= arregloSlide.length) {
		indexSlider = 0;
	}
	$('#divSlider img').attr('src', arregloSlide[indexSlider]);
  $('#divTextSlider h5').html(arregloh5[indexSlider]);
  $('#divTextSlider p').html(arregloP[indexSlider]);
}



//FUNCION READY QUE INICIALIZA
$( _ => {
  //alert("go");
  const container = $('.container');
  render(container);

//HOOVER A LOS BOTONES GUIADORES DE SLIDE
  $('#colGuiador div').hover(function() {
		$(this).css('background', '#f64552');
	},function() {
		$(this).css('background', '#8f8f8f');
 	});

//CUANDO SE DE CLICK A ALGUN BOTON GUIADOR ESTE SE REEDIRECCIONA AL QUE SE INDICA
  $('#colGuiador div').on('click', function() {
  indexSlider = parseInt($(this).attr('id'));
  $('#divSlider img').attr('src', arregloSlide[indexSlider]);
  $('#divTextSlider h5').html(arregloh5[indexSlider]);
  $('#divTextSlider p').html(arregloP[indexSlider]);
  });

// TIEMPO DE PASE PARA EL SLIDE
  setInterval(function(){
		avanzarSlider();
	}, 4000);

});
