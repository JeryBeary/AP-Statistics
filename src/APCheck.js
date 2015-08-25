
var API_KEY = "cacad878-8ea2-4b9b-a54d-4fc39a83fa17";


var games = 0; //total number of games

//possible AP items... stores # of wins and # of appearances in old and new games
var rabadonsGames = {oldGames:0, newGames:0, oldWins:0, newWins:0};
var rylaisGames = {oldGames:0, newGames:0, oldWins:0, newWins:0};
var seraphsGames = {oldGames:0, newGames:0, oldWins:0, newWins:0};
var ludensGames = {oldGames:0, newGames:0, oldWins:0, newWins:0};
var zhonyasGames = {oldGames:0, newGames:0, oldWins:0, newWins:0};
var nashorsGames = {oldGames:0, newGames:0, oldWins:0, newWins:0};
var abyssalGames = {oldGames:0, newGames:0, oldWins:0, newWins:0};
var morelloGames = {oldGames:0, newGames:0, oldWins:0, newWins:0};
var voidGames = {oldGames:0, newGames:0, oldWins:0, newWins:0};
var athenesGames = {oldGames:0, newGames:0, oldWins:0, newWins:0};
var rodGames = {oldGames:0, newGames:0, oldWins:0, newWins:0};

//AP caster type champions and their winrate/lossrate, # of games played, items
var azirGames = {oldGames:0, newGames:0};
var actual;

window.onload = checkStat();

function fileSearch()
{
    //loop through all old games in all files
    loadJSON("/NORMAL_5X5/BR.json" , function response() {
    // Parse JSON string into object
    actual = JSON.parse(response);
    });
    console.log(actual[0]);
    checkStat(actual[0]);
    
    //checkStat()

    //loop through all new games in all files
    //checkStat()
}

function loadJSON(file, callback)
{
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}


/*
add to counters
*/
function checkStat(gameId){
    

        $.ajax({
            url: 'https://na.api.pvp.net/api/lol/na/v2.2/match/' + gameId + '?includeTimeline=false&api_key=cacad878-8ea2-4b9b-a54d-4fc39a83fa17' ,
            //+ SUMMONER_NAME + '?api_key=' + API_KEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                var player = json[gameId].participants[0].championId;
                

                document.getElementById("#items").innerHTML = player;
                document.getElementById("sID").innerHTML = summonerID;

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Error getting item data!");
            }
        });

        }

