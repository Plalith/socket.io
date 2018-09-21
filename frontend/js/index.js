var socket = io(); 
socket.on('connect',function () {
    console.log("Connected to server");
});
socket.on('disconnect', function () {
    console.log('disconnected from server');
});
socket.on('recpit' ,function (data) {
    var li = $('<li style="text-align:left; width:250px; list-style-type: none;"></li>');
    li.html(`<h4 style="margin:0px">${data.text} </h4><span style="font-size:10px;">${data.time}</span>`);
    $('#messages').append(li);
});

function sendmessage() {
    socket.emit('createmail', {from:'tab',text:document.getElementById('message').value},function(ack){
        var li = $('<li style="text-align:right; width:250px; list-style-type: none;"></li>');
        li.html(`<h4 style="margin:0px">${ack.text} </h4><span style="font-size:10px;">${ack.time}</span>`);
        $('#messages').append(li);
    });


}