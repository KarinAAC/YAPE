'use strict'

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Carrusel(_ => render(root)));
  /*wrapper.append(Section());
  wrapper.append(SectionEstaciones());
  root.append(wrapper);*/

}

/*const state = {
  stations: null,
  selectedStation: null
};*/

$(document).ready(function(){
alert("go");

  /*getJSON('stations.json', (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;

    const root = $('.root');
    render(root);

    $('#contenedorInformacion').on('click', function () {
      return alert("go");
    });

  }*/

  const root = $('.root');
  render(root);

});
