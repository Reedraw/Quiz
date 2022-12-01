var socket = io();

socket.on('connect', function(){
    socket.emit('requestDbNames');//Get database names to display to user
});

socket.on('gameNamesData', function(data){
    for(var i = 0; i < Object.keys(data).length; i++){
        var div = document.getElementById('game-list'); //Get empty div class from HTML
        var button = document.createElement('button'); //Creates a button
        
        button.innerHTML = data[i].name; //Button text will be from data name from database
        button.setAttribute('onClick', "startGame('" + data[i].id + "')"); //onclick will run function
        button.setAttribute('id', 'gameButton'); //Will be used to link to CSS by setting id
        
        div.appendChild(button); //In the empty div class, add button for each quiz made in databse
        div.appendChild(document.createElement('br')); //Produces a line break in HTML
        div.appendChild(document.createElement('br'));
    }
});

function startGame(data){
    window.location.href="/host/" + "?id=" + data;
}
