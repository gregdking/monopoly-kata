define(function (require) {
    'use strict';

    function Location(position) {
        this.position = position || 0;
    }

    Location.prototype.getPosition = function () {
        return this.position;
    };

    Location.prototype.incrementPosition = function (spaces) {
        this.position = (this.position + spaces) % 40;
    };


    function PlayerName(name) {
        this.name = name;
    }

    return {
        Location: Location,
        PlayerName: PlayerName
    };
});