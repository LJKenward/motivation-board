var userScores = [], timeClicked;

//create array of submitted form data
$( "form" ).on( "submit", function( event ) {
	event.preventDefault();
	timeClicked = Date();
	console.log(timeClicked);
	
	if (timeClicked.substr(0,3) === 'Tue') {
	
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
	}
});



//JOSH


// reference to HTML div elements
unsortedListRef = document.getElementById('unsortedlist');
sortedListRef = document.getElementById('sortedlist');

// a list of objects that each represent a user
// because of the difference in weekly progress,
// once sorted, Spooky Ghost should be element one of the list, and Josh should be element 2
scores = [{
			name:"Josh",
            previousWeekScore:136,
            currentScore: 138   // weekly progress of 2 points
          },
          {
          	name:"Spooky Ghost",
            previousWeekScore:3333,
            currentScore: 3334  // weekly progress of 1 point
          }];

// output our unsorted list of objects
unsortedListRef.innerHTML = JSON.stringify(scores); // if you use 'scores' you get '[Object, Object]'
                                                    // thus we use JSON to display it

// sort weekly progress from minimum -> maximum
var sortByScoreProgress = function(scoresList){
  scoresList.sort(function(a, b){return (a.currentScore - a.previousWeekScore) - (b.currentScore - b.previousWeekScore)});
}

// sort our scores list
sortByScoreProgress(scores);

// output our sorted list
sortedListRef.innerHTML = JSON.stringify(scores);


//Jeff

//Display data

for (var i=0; i < scores.length; i++){
	$("#leaderboard").append("<li>" + scores[i]["name"] + " " + scores[i]["previousWeekScore"] + " " + scores[i]["currentScore"] + "</li>");
}
