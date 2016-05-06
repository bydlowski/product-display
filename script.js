var main = function() {
	var jsonMovies1 = {"movies": [{"code": "01-A","IMDB": 7.1,"Tomatoes": 6.7,"Metacritic": 5.9,"TMDB": 6.7},{"code": "02-A","IMDB": 7.3,"Tomatoes": 6.5,"Metacritic": 5.5,"TMDB": 6.9}]};
	$('#result1').html('<p>' + JSON.stringify(jsonMovies1['movies'][1]['code']) + '</p>'); 
	
	var jsonMovies2 = [{"code": "01-A","IMDB": 7.1,"Tomatoes": 6.7,"Metacritic": 5.9,"TMDB": 6.7},{"code": "02-A","IMDB": 7.3,"Tomatoes": 6.5,"Metacritic": 5.5,"TMDB": 6.9}];
	$('#result2').html('<p>' + JSON.stringify(jsonMovies2[1]['code']) + '</p>'); 

	for (var i = 0; i < jsonMovies2.length; ++i) {
		$('#result3').append('<p>For item code ' + jsonMovies2[i]['code'] + ', the price is ' + jsonMovies2[i]['IMDB'] + ' </p>');
	  ;
	}

	var productsjson = data;

	for (var i = 0; i < data.length; ++i) {
		$('#result4').append('<p>For item ' + data[i]['nome_produtoING'] + ', the price is ' + data[i]['preco'] + ' </p>');
	  ;
	}
};

$(document).ready(main);