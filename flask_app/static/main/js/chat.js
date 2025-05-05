var socket;

$(document).ready(function(){
    
    socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port + '/chat');
    socket.on('connect', function() {
        socket.emit('joined', {});
    });
    
    socket.on('status', function(data) {     
        let tag  = document.createElement("p");
        let text = document.createTextNode(data.msg);
        let element = document.getElementById("chat");
        tag.appendChild(text);
        tag.style.cssText = data.style;
        element.appendChild(tag);
        $('#chat').scrollTop($('#chat')[0].scrollHeight);

    });  
    
    const input = $('#inputBox');
    input.bind('keydown', function (event) {
        if ((event.keyCode === 13) && (input.val() !== ''))  {
            socket.emit('message', {content: input.val()});
            input.val('');
        }
    });

    socket.on('messaged', function(data) {
        let tag  = document.createElement("p");
        let text = document.createTextNode(data.msg);
        let element = document.getElementById("chat");
        tag.appendChild(text);
        tag.style.cssText = data.style;
        element.appendChild(tag);
        $('#chat').scrollTop($('#chat')[0].scrollHeight);
    })

    const leaveButton = $('#leaveChat');
    leaveButton.bind('click', function () {
        socket.emit('leave', {});
        window.location.href = '/';
    });

    socket.on('left', function(data) {     
        let tag  = document.createElement("p");
        let text = document.createTextNode(data.msg);
        let element = document.getElementById("chat");
        tag.appendChild(text);
        tag.style.cssText = data.style;
        element.appendChild(tag);
        $('#chat').scrollTop($('#chat')[0].scrollHeight);

    });  
});