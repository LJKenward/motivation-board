var userScores = [], timeClicked, gotJson, unsortedListRef, sortedListRef;

//create array of submitted form data
$( "form" ).on( "submit", function( event ) {
	event.preventDefault();
	timeClicked = Date();
	console.log(timeClicked);
	
	if (timeClicked.substr(0,3) === 'Wed') {
	
	var userInput, userFormatted;
  userInput = $( this ).serializeArray();
	console.log(userInput);
	
	userFormatted = {
		name: userInput[0]["value"],
		previousScore: Number(userInput[1]["value"]),
		currentScore: Number(userInput[2]["value"])
	}
	
	userScores.push(userFormatted);
	console.log(userScores);
	
	var dataToStore = JSON.stringify(userScores);
	console.log(dataToStore);
	
	//code to create json on myjson.com
	//only needs done once so now commented out
	
	/*
		$.ajax({
    url:"https://api.myjson.com/bins/",
    type:"POST",
    data: dataToStore,
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(data, textStatus, jqXHR){
			var jsonid = console.log(data);
		}
		}); */
	
		$.ajax({
    url:"https://api.myjson.com/bins//45r9q",
    type:"PUT",
    data: dataToStore,
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(data, textStatus, jqXHR){

    }
		});
		
		
		$.get("https://api.myjson.com/bins//45r9q", function(data, textStatus, jqXHR) {
			console.log(data);
			gotJson = data;
			
			unsortedListRef = document.getElementById('unsortedlist');
			sortedListRef = document.getElementById('sortedlist');
		
			unsortedListRef.innerHTML = JSON.stringify(gotJson); 
			console.log(gotJson);
			
			// sort weekly progress from minimum -> maximum
			var sortByScoreProgress = function(scoresList){
				scoresList.sort(function(a, b){return (a.currentScore - a.previousScore) - (b.currentScore - b.previousScore)});
			}
		
			sortByScoreProgress(gotJson);

			// output our sorted list
			sortedListRef.innerHTML = JSON.stringify(gotJson);
			
			//Display data

			for (var i=0; i < gotJson.length; i++){
				$("#leaderboard").append("<li>" + gotJson[i]["name"] + " " + gotJson[i]["previousWeekScore"] + " " + gotJson[i]["currentScore"] + "</li>");
			}

		});
	}
});


//Jeff


