$( document ).ready(function() {

	var colores = [
	                '#FF0000', 
	                '#FF99FF', 
	                '#000099', 
	                '#0033FF', 
	                '#00FFFF',
					'#00FF66', 
	                '#005436', 
	                '#CCFF00', 
	                '#FFFF00', 
	                '#FF9900',
					'#660000', 
	                '#9933CC', 
	                '#9999CC',
					'#FFCE00',
					'#FF6700',
					'#000000',
					'#606060',
					'#FF9F9F',
					'#5B2700',
					'#83D6FF',
					'#B6FFB8',
					'#FFF98D',
					'#009696',
					'#56074B'
	            ];

	var nombres = [
	                "PATTI SMITH",
	                "TACITA DEAN",
	                "FRANCIS ALÿS",
	                "JOSEPH BEUYS",
	                "CILDO MEIRELES",
	                "DAVID HOCKNEY",
	                "ANDY WARHOL",
	                "MARCEL DUCHAMP",
	                "RONI HORN",
					"BRIAN ENO",
	                "JOHN BALDESSARI",
	                "PAUL PFEIFFER",
	                "MAYA DEREN",
	                "ROBERT SMITHSON",
	                "GABRIEL OROZCO",
	                "DENNIS OPPENHEIM",
	                "GUY DEBORD",
	                "VASILI KANDINSKY",
	                "JOHN CAGE",
	                "WILLIAM KENTRIDGE",
	                "ANTONIO LÓPEZ GARCÍA",
	                "OSCAR WILDE",
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
					"OSCAR MUÑOZ",
					"MARCIA CABRERA",
					"DANILO VOLPATO",
					"MIGUEL JARA",
					"ELKIN CALDERÓN",
					"DAVID PEÑA",
					"WALTER DE MARÍA",
					"RAFAëL ROZENDAAL",
					"JOSEPH KOSUTH",
					"ROGER COLOM",
					"ANDRÉS MARTÍNEZ",
					"DAVID BYRNE",
					"JOSE ALEJANDRO RESTREPO",
	                "JUAN FERNANDO HERRÁN",
					"MARIO OPAZO",
					"DANIEL SÁNCHEZ",
					"ANDRÉS FELIPE URIBE",
					"CAI GUO-QIANG",
					"MADS LYNNERUP",
					"GUILLERMO GÓMEZ-PEÑA",
					"JAMES TURRELL",
					"SEBASTIÁN ÁLVAREZ",
					"MARÍA FERNANDA CARDOZO",
					"GORDON MATTA-CLARK",
					"PIPILOTTI RIST",
					"SANTIAGO REYES",
					"ALEJANDRO MANCERA",
					"IVÁN ARGOTE",
					"ÍCARO ZORBAR",
					"ANA BELÉN CANTONI",
					"JEISSON CASTRO",
					"WILL BROWN",
					"CHRIS SOLLARS",
					"MARTÍNEZ-ZEA",
					"ANDRÉS JURADO",
					"SANTIAGO FORERO",
					"CATALINA RODRÍGUEZ",
					"DANIEL EATOCK",
					"DIEGO PIÑEROS",
					"ENAR DE DIOS RODRÍGUEZ",
					"JOSEPH DEL PESCO",
					"LEANDRO ERLICH",
					"LEÓN FERRARI",
					"CARLOS CASTRO",
					"ANA KARINA MORENO",
					"ILYA KABAKOV",
					"JOHN DIVOLA",
					"GERHARD RICHTER",
					"ALBERTO GIACOMETTI",
					"THE YES MEN",
					"ADRIANA SALAZAR",
					"9000",
					"LUCIANA PONTE",
					"LEYLA CÁRDENAS",
					"JONATHAN RAMÍREZ",
					"GIOVANNI ANSELMO",
					"MICHELANGELO PISTOLETTO",
					"HUMBERTO JUNCA"
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


	var generar = function(){	
		var i;
		$('#nombres .row').empty();
		var lista_nombres = shuffle(nombres);
		var lista_colores = shuffle(colores);
		var colors = randomNoRepeats( lista_colores );
		for (i = 0; i < lista_nombres.length; ++i) {
			$('#nombres .row').append(
				'<div style="color:'+colors()+'" class="flex-item">'+lista_nombres[i]+'</div>'
			);
		}
	}

	generar();

	$( document ).on( "click", generar );
});