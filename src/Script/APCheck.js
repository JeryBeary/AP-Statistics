
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
    //the data portion of the graph has the values represented
    var data = google.visualization.arrayToDataTable([
        //titles
        ['Item', 'Old Win Rate', 'New Win Rate'],
        //We are using percentages for win rate/pick rate so we are multiplying by 100
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

// configurations for the chart, creates different visual settings
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

//configurations for the chart, creates a different visual look
    var options = {
      chart: {
        title: 'Pick rates of New and Old AP Items',
        subtitle: 'Analyzed from a set of normal and ranked games before and after the changes',
    },
    textStyle: {
        color: 'white'
    },
    //horizontal axis features, such as font color
    hAxis: {
        title: 'Percentage',
        titleTextStyle: {color:'green', fontSize: '26'},
        textStyle:{color: 'white'},
    }, 
            animation: {"startup": true},
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

    //prepapares to draw the bar graph
    var chart = new google.charts.Bar(document.getElementById("chart_two"));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}
window.onload = fileSearch();


//sends in the files to be parsed by JSON
//there are multiple categories, from 5.11 and 5.14 and between normals and rankeds
//all values contribute to the final results displayed in the graph
function fileSearch()
{
    //loop through all old games in all files

    loadJSON("../gameData/5.11/NORMAL_5X5/BR.json",'br', true);
/*    loadJSON("../gameData/5.11/NORMAL_5X5/NA.json",'br', true);
    loadJSON("../gameData/5.11/NORMAL_5X5/BR.json",'br', true);
    loadJSON("../gameData/5.11/NORMAL_5X5/BR.json",'br', true);
    loadJSON("../gameData/5.11/NORMAL_5X5/BR.json",'br', true);
    loadJSON("../gameData/5.11/NORMAL_5X5/BR.json",'br', true);   */ 
    //loop through every JSON file
    // go through each
    
}

function loadJSON(file, region, old)
{
    $.getJSON(file, function(data){
        //data is the json file
        //there is only a single array
        var len = data.length;
                    checkStat(data[1].toString(), region, true);
        for(i = 0; i < len; i++){

           
        }
    });
}


/*
add to counters
*/
function checkStat(matchId, region, old){

        //HTTP Request to the Riot Games Server using Ajax
        //Uses API key and region as info
        $.ajax({
            url: 'https://' + region + '.api.pvp.net/api/lol/' + region + '/v2.2/match/' + matchId + '?&api_key=' + API_KEY,
            //+ SUMMONER_NAME + '?api_key=' + API_KEY,
            type: 'GET',
            dataType: 'json',

            success: function (json, textStatus, jqXHR) {
                for( x = 0; x<10; x++)
                {
                    isAPItem(json.participants[x].stats.item0, old);
                    isAPItem(json.participants[x].stats.item1, old);
                    isAPItem(json.participants[x].stats.item2, old);
                    isAPItem(json.participants[x].stats.item3, old);
                    isAPItem(json.participants[x].stats.item4, old);
                    isAPItem(json.participants[x].stats.item5, old);
                    isAPItem(json.participants[x].stats.item6, old);                   

                }
                if(old)
                {
                    oldgames = oldgames + 10;
                }
                else
                {
                    newGames = newGames + 10;
                }
            

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Error getting item data!");
            }
        });

    }

function isAPItem(itemId, old)
{
    switch(itemId)
    {
        case 3089:
            if(old)
            {
                rabadonsGames.oldGames++;
            }
            else
            {
                rabadonsGames.newGames++;
            }
            break;
        case 3116:
            if(old)
            {
                rylaisGames.oldGames++;
            }
            else
            {
                rylaisGames.newGames++;
            }
            break;
        case 3048:
            if(old)
            {
                seraphsGames.oldGames++;
            }
            else
            {
                seraphsGames.newGames++;
            }
            break;
        case 3040:
            if(old)
            {
                seraphsGames.oldGames++;
            }
            else
            {
                seraphsGames.newGames++;
            }
            break;
        case 3285:
            if(old)
            {
                ludensGames.oldGames++;
            }
            else
            {
                ludensGames.newGames++;
            }
            break;
        case 3157:
            if(old)
            {
                zhonyasGames.oldGames++;
            }
            else
            {
                zhonyasGames.newGames++;
            }
            break;
        case 3115:
            if(old)
            {
                nashorsGames.oldGames++;
            }
            else
            {
                nashorsGames.newGames++;
            }
            break;
        case 3001:
            if(old)
            {
                abyssalGames.oldGames++;
            }
            else
            {
                abyssalGames.newGames++;
            }
            break;
        case 3165:
            if(old)
            {
                morelloGames.oldGames++;
            }
            else
            {
                morelloGames.newGames++;
            }
            break;
        case 3135:
            if(old)
            {
                voidGames.oldGames++;
            }
            else
            {
                voidGames.newGames++;
            }
            break;
        case 3174:
            if(old)
            {
                athenesGames.oldGames++;
            }
            else
            {
                athenesGames.newGames++;
            }
            break;
        case 3027:
            if(old)
            {
                rodGames.oldGames++;
            }
            else
            {
                rodGames.newGames++;
            }
            break;

            drawChart2();

    }

}



