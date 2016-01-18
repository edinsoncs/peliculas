$(document).ready(function(){

	
		var API_URL = "http://trailersapi.com/";
		var API_JSON = "trailers.json?";
		var API_MOVIE = "movie="
		var API_SEARCH;
		var API_DETAILS = "&limit=10&width=320";
		//var urlstring = API_URL + API_JSON + API_MOVIE + API_SEARCH + API_DETAILS;

		$("input[type='submit']").click(function(e){

			e.preventDefault();

			API_SEARCH = $(".form input[type='search']").val();
			var t = API_URL + API_JSON + API_MOVIE + API_SEARCH + API_DETAILS;

			$.getJSON(t, list, false);

			function list(data) {

				var template = "";
				for(var i = 0; i < data.length; i++) {
					console.log(data[i].code);
					var iframe = data[i].code;
					var title = data[i].title;
					template += "<p>"+title+"</p>"+
								"<div>"+iframe+"</div>";
				}
				$(".showVideos").html(template);
			}

			$.getJSON("http://www.omdbapi.com/?t="+API_SEARCH+"&y=&plot=short&r=json", bio, false);

			function bio(data) {
				var title = data.Title;
				var year = data.Year;
				var time = data.Runtime;
				var genero = data.Genre;
				var director = data.Director;
				var post =  data.Poster;

				$(".titleBio").append(title);
				$(".titleYear").append(year);
				$(".titleTime").append(time);
				$(".titleGen").append(genero);
				$(".titleDire").append(director);
				$(".poster").append("<img src='"+post+"'>");

			}

		});



	



});