define(function (require) {
    'use strict';

    function Player(location) {
        this.location = location;
    }

    Player.prototype.moveSpaces = function (spaces) {
        this.location.incrementPosition(spaces);
    };

    return Player;
});