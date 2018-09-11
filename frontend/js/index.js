var socket = io(); 

socket.on('connect',function () {
    console.log("Connected to server");

    socket.emit('createmail', {
        to:'server@gmail.com',
        from:'client',
        text:'texting'
    })
});
socket.on('disconnect', function () {
    console.log('disconnected from server');
});

socket.on('newemail', function(data) {
    console.log(data);
})