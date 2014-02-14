define(function (require) {
    'use strict';

    function Player(name, location) {
        this.name = name;
        this.location = location;
    }

    Player.prototype.moveSpaces = function (spaces) {
        this.location.incrementPosition(spaces);
    };

    return Player;
});