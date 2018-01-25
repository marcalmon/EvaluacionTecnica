/* No pude hacer que me dejara ordanado como querian, me fue complicado el manejo 
de arrays de objetos. Los separa por atributos pero los repite igual*/

var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

/*console.log(" ");
endorsements.sort(function(user){
	return console.log((user));
});*/
function OrdenarArray(array){
	var endorsements1=[];
	var count=0;
	for(var i=0; i<endorsements.length; i++){
		if(endorsements[i].skill=='css'){

			endorsements1.push(endorsements[i]);
			count++;
		}	
	}
	endorsements1.push(count);

	count=0;
	for(var i=0; i<endorsements.length; i++){
		if(endorsements[i].skill=='javascript'){

			endorsements1.push(endorsements[i]);
			count++;
		}	
	}
	endorsements1.push(count);

	count=0;
	for(var i=0; i<endorsements.length; i++){
		if(endorsements[i].skill=='html'){

			endorsements1.push(endorsements[i]);
			count++;
		}	
	}

	endorsements1.push(count);
	console.log(endorsements1);
	console.log(count);

}

OrdenarArray(endorsements);



