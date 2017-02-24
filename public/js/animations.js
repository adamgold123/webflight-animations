(function(window, document, $, undefined) {
    'use strict';
    var Animations = function Animations(cockpit) {
        console.log("Loading animations plugin.");
        this.cockpit = cockpit;

        var mymenu = '<select id="animations">'
        mymenu += '<option value="phiM30Deg">phiM30Deg</option>'
        mymenu += '<option value="phi30Deg">phi30Deg</option>'
        mymenu += '<option value="thetaM30Deg">thetaM30Deg</option>'
        mymenu += '<option value="theta20degYaw200deg">theta20degYaw200deg</option>'
        mymenu += '<option value="turnaround">turnaround</option>'
        mymenu += '<option value="turnaroundGodown">turnaroundGodown</option>'
        mymenu += '<option value="yawShake">yawShake</option>'
        mymenu += '<option value="yawDance">yawDance</option>'
        mymenu += '<option value="phiDance">phiDance</option>'
        mymenu += '<option value="thetaDance">thetaDance</option>'
        mymenu += '<option value="vzDance">vzDance</option>'
        mymenu += '<option value="wave">wave</option>'
        mymenu += '<option value="phiThetaMixed">phiThetaMixed</option>'
        mymenu += '<option value="flipAhead">flipAhead</option>'
        mymenu += '<option value="flipBehind">flipBehind</option>'
        mymenu += '<option value="flipLeft">flipLeft</option>'
        mymenu += '<option value="flipRight">flipRight</option>'
        mymenu += '</select>';

        $("#controls").prepend(' duration: <input id="animate-duration" size="4" placeholder="1000"/>');
        $("#controls").prepend(mymenu);
        $("#controls").prepend('<button id="animate">animate</button>');

        this.listen();
    };

    Animations.prototype.listen = function listen() {
        var animations = this;

        $('#animate').click(function(ev) {
            ev.preventDefault();
            var name = $("#animations").val() || "wave";
            var duration = $("#animate-duration").val() || 1000;
            animations.animate(name, duration);
        });

    };

    Animations.prototype.animate = function config(name, duration) {

        this.cockpit.socket.emit("/animations/animate", {
            name: name,
            duration: duration
        });
    };

    window.Cockpit.plugins.push(Animations);

}(window, document, jQuery));
