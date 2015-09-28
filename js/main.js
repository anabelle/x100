$( document ).ready(function() {

	function shuffle(o){
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	}

	function randomNoRepeats(array) {
	  var copy = array.slice(0);
	  return function() {
	    if (copy.length < 1) { copy = array.slice(0); }
	    var index = Math.floor(Math.random() * copy.length);
	    var item = copy[index];
	    copy.splice(index, 1);
	    return item;
	  };
	}

	var lista_nombres = shuffle(nombres);
	var lista_colores = shuffle(colores);
	var colors = randomNoRepeats( lista_colores );

	var i;
	for (i = 0; i < lista_nombres.length; ++i) {
		console.log( lista_nombres[i] );
		$('#nombres .row').append(
			'<div style="color:'+colors()+'" class="flex-item">'+lista_nombres[i]+'</div>'
		);
	}
});