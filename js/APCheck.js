
var API_KEY = "042c618c-50fb-48d9-8ef0-d9879460b899";


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
    title: 'Percentage',
    titleTextStyle: {color: 'red', fontSize:'26'},
    textStyle:{color: '#FFF'},
    baselineColor:'white',
},
vAxis: {
    title: 'Item',
    textStyle: {color: 'white'},
    titleTextStyle: {color:'Blue', fontSize:'26'}
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
    title: 'Percentage',
    titleTextStyle: {color:'green', fontSize: '26'},
    textStyle:{color: 'white'},
}, 
        bars: 'horizontal', // Required for Material Bar Charts.
        legend: {textStyle: {color:'white'}},
        vAxis:{
            title: 'Item',
            titleTextStyle: {color:'yellow', fontSize:'26'},
            textStyle:{
                color: 'white'
            }
        },

        
    };


    var chart = new google.charts.Bar(document.getElementById("chart_two"));
    //convertOptions necessary for Material Bar Charts
    chart.draw(data, google.charts.Bar.convertOptions(options));
}
window.onload = fileSearch();

function fileSearch()
{
    //loop through all old games in all files

    loadJSON("../gameData/NORMAL_5X5/BR.json",'br');
    //loop through every JSON file
    // go through each
    
}

function loadJSON(file, region)
{
    $.getJSON(file, function(data){
        //data is the json file
        //there is only a single array
        var len = data.length;
                    checkStat(data[1].toString(), region);
        for(i = 0; i < len; i++){


           
        }
    });
}


/*
add to counters
*/
function checkStat(matchId, region){

        //HTTP Request to the Riot Games Server using Ajax
        //Uses API key and region as info
        $.ajax({
            url: 'https://' + region + '.api.pvp.net/api/lol/' + region + '/v2.2/match/' + matchId + '?&api_key=' + API_KEY,
            //+ SUMMONER_NAME + '?api_key=' + API_KEY,
            type: 'GET',
            dataType: 'json',

            success: function (json, textStatus, jqXHR) {
                var item = json.participants[0].stats.item0;
                for( x = 0; x<10; x++)
                {
                    /*
                    if(json[matchId].participants[0].stats.item0)
                    {
                        
                    }
                    if(json[matchId].participants[0].stats.item1)
                    {

                    }
                    */
                }
                document.getElementById("items").innerHTML = item;
            

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Error getting item data!");
            }
        });

    }




