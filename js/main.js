$( document ).ready(function() {

	var colores = [
	                '#FFFF00', 
	                '#663399', 
	                '#006600', 
	                '#CC0000', 
	                '#00CCCC',
					'#CC66CC', 
	                '#FF6600', 
	                '#003333', 
	                '#000066', 
	                '#333366',
					'#FFFF00', 
	                '#FFCC00', 
	                '#FFCC66', 
	                '#BBFF00', 
	                '#25AD25',
					'#0092FF', 
	                '#4040FF', 
	                '#B20845', 
	                '#003D37', 
	                '#FFB000'
					
	            ];

	var nombres = [
	                "PATTI SMITH",
	                "ALEJANDRA PIZARNIK",
	                "TACITA DEAN",
	                "FRANCIS ALÿS",
	                "JOSEPH BEUYS",
	                "CILDO MEIRELES",
	                "DAVID HOCKNEY",
	                "ANDY WARHOL",
	                "OSCAR MUÑOZ",
	                "MARCEL DUCHAMP",
	                "RONI HORN",
					"BRIAN ENO",
	                "JOHN BALDESSARI",
	                "PAUL PFEIFFER",
	                "MAYA DEREN",
	                "ROBERT SMITHSON",
	                "MARCEL DUCHAMP",
	                "GABRIEL OROZCO",
	                "DENNIS OPPENHEIM",
	                "GUY DEBORD",
	                "VASILI KANDINSKY",
	                "JOHN CAGE",
	                "WILLIAM KENTRIDGE",
	                "ANTONIO LÓPEZ GARCÍA",
	                "OSCAR WILDE",
	                "JOSE ALEJANDRO RESTREPO",
	                "JUAN FERNANDO HERRÁN",
					"MARIO OPAZO",
	                "CHRIS MARKER",
	                "JEAN-LUC GODARD",
					"WONG KAR-WAI",
					"WIM WENDERS",
					"AGNES VARDA",
					"JACK SMITH",
					"DAVID BOWIE",
					"IGGY POP",
					"BEATRIZ GONZÁLEZ",
					"MILENA BONILLA",
					"NÉSTOR GUTIÉRREZ",
					"BEATRIZ EUGENIA DÍAZ",
					"WALLACE VIEIRA MASUKO",
					"DANIEL SALAMANCA",
					"JUAN MEJÍA",
					"LUCAS OSPINA",
					"NATALIA CASTAÑEDA",
					"LILIANA VÉLEZ",
					"MATEO COHEN",
					"MARCIA CABRERA",
					"DANILO VOLPATO",
					"MIGUEL JARA",
					"ELKIN CALDERÓN",
					"WALTER DE MARIA",
					"RAFAëL ROZENDAAL"
					
	            ];
                        
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