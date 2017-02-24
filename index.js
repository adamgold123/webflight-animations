function animations(name, deps) {
    'use strict';

    // deps.client.on('navdata', function(data) {
    //     console.log(JSON.stringify(data, null, 4));
    // });

    deps.io.sockets.on('connection', function(socket) {
        
        socket.on('/animations/animate', function(params) {
            deps.io.sockets.emit('/message', params);
            deps.client.animate(params.name, params.duration);
        });

    });
};

module.exports = animations;