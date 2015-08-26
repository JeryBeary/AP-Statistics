
var API_KEY = "cacad878-8ea2-4b9b-a54d-4fc39a83fa17";


var oldgames = 0; //total number of games in 5.11
var newgames = 0; //total number of games in 5.14

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

google.load("visualization", "1.1", {packages:["bar"]});
google.setOnLoadCallback(drawChart);

//instantiates info to draw graphs and adds detail
function drawChart()
{
    var data = google.visualization.arrayToDataTable([
        ['Item', 'Old Win Rate', 'New Win Rate'],
        ["Rabadon's Deathcap", 100*(rabadonsGames.oldWins/rabadonsGames.oldGames), 100*(rabadonsGames.newWins/rabadonsGames.newGames) ],
        ["Rylai's Crystal Scepter", 100*(rylaisGames.oldWins/rylaisGames.oldGames), 100*(rylaisGames.newWins/rylaisGames.newGames) ],
        ["Seraph's Embrace", 100*(seraphsGames.oldWins/seraphsGames.oldGames), 100*(seraphsGames.newWins/seraphsGames.newGames) ],
        ["Luden's Echo", 100*(ludensGames.oldWins/ludensGames.oldGames), 100*(ludensGames.newWins/ludensGames.newGames) ],
        ["Zhonya's Hourglass", 100*(zhonyasGames.oldWins/zhonyasGames.oldGames), 100*(zhonyasGames.newWins/zhonyasGames.newGames) ],
        ["Nashor's Tooth", 100*(nashorsGames.oldWins/nashorsGames.oldGames), 100*(nashorsGames.newWins/nashorsGames.newGames) ],
        ["Abyssal Scepter", 100*(abyssalGames.oldWins/abyssalGames.oldGames), 100*(abyssalGames.newWins/abyssalGames.newGames) ],
        ["Morellonomicon", 100*(morelloGames.oldWins/morelloGames.oldGames), 100*(morelloGames.newWins/morelloGames.newGames) ],
        ["Void Staff", 100*(voidGames.oldWins/voidGames.oldGames), 100*(voidGames.newWins/voidGames.newGames) ],
        ["Athene's Unholy Grail", 100*(athenesGames.oldWins/athenesGames.oldGames), 100*(athenesGames.newWins/athenesGames.newGames) ],
        ["Rod of Ages", 100*(rodGames.oldWins/rodGames.oldGames), 100*(rodGames.newWins/rodGames.newGames) ],
            ]);

    var options = {

      chart: {
        title: 'Win rates of New and Old AP Items',
        subtitle: 'Analyzed from a set of normal and ranked games before and after the changes',
             },
      textStyle: {
        color: 'white'
      },
      hAxis: {
            textStyle:{color: '#FFF'},
            baselineColor:'white',
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        legend: {textStyle: {color:'white'}},
        
        };

    var chart = new google.charts.Bar(document.getElementById("chart"));
    //convertOptions necessary for Material Bar Charts
    chart.draw(data, google.charts.Bar.convertOptions(options));

    drawChart2();
}

function drawChart2()
{
    var data = google.visualization.arrayToDataTable([
        ['Item', 'Old Pick Rate', 'New Pick Rate'],
        ["Rabadon's Deathcap", 100*(rabadonsGames.oldGames/oldgames), 100*(rabadonsGames.newGames/newgames) ],
        ["Rylai's Crystal Scepter", 100*(rylaisGames.oldGames/oldgames), 100*(rylaisGames.newGames/newgames) ],
        ["Seraph's Embrace", 100*(seraphsGames.oldGames/oldgames), 100*(seraphsGames.newGames/newgames) ],
        ["Luden's Echo", 100*(ludensGames.oldGames/oldgames), 100*(ludensGames.newGames/newgames) ],
        ["Zhonya's Hourglass", 100*(zhonyasGames.oldGames/oldgames), 100*(zhonyasGames.newGames/newgames) ],
        ["Nashor's Tooth", 100*(nashorsGames.oldGames/oldgames), 100*(nashorsGames.newGames/newgames) ],
        ["Abyssal Scepter", 100*(abyssalGames.oldGames/oldgames), 100*(abyssalGames.newGames/newgames) ],
        ["Morellonomicon", 100*(morelloGames.oldGames/oldgames), 100*(morelloGames.newGames/newgames) ],
        ["Void Staff", 100*(voidGames.oldGames/oldgames), 100*(voidGames.newGames/newgames) ],
        ["Athene's Unholy Grail", 100*(athenesGames.oldGames/oldgames), 100*(athenesGames.newGames/newgames) ],
        ["Rod of Ages", 100*(rodGames.oldGames/oldgames), 100*(rodGames.newGames/newgames) ],
            ]);

    var options = {
      chart: {
        title: 'Pick rates of New and Old AP Items',
        subtitle: 'Analyzed from a set of normal and ranked games before and after the changes',
             },
      textStyle: {
        color: 'white'
      },
      hAxis: {
            textStyle:{color: 'white'},
            baselineColor:'white',
            gridlineColor:'black'
            }, 
        bars: 'horizontal', // Required for Material Bar Charts.
        legend: {textStyle: {color:'white'}},

        
        };


    var chart = new google.charts.Bar(document.getElementById("chart_two"));
    //convertOptions necessary for Material Bar Charts
    chart.draw(data, google.charts.Bar.convertOptions(options));
}
window.onload = fileSearch();

function fileSearch()
{
    //loop through all old games in all files

    //starts off with the Normals in alphabetical order starting with Brazil
    loadJSON("BR.json" , function response() {
    // Parse JSON string into object
    actual = JSON.parse(response);
    });
    console.log(actual[0]);
    checkStat(actual[0].toString(), "br");
    
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
function checkStat(gameId, region){

        //HTTP Request to the Riot Games Server using Ajax
        //Uses API key and region as info
        $.ajax({
            url: 'https://' + region + '.api.pvp.net/api/lol/'+ region +'/v2.2/match/' + gameId + 
            '?includeTimeline=false&api_key='+ API_KEY,
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




