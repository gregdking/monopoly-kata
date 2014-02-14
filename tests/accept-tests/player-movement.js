define(function (require) {
    'use strict';
    var Player = require('player'),
        Tiny = require('tiny');

    describe('Player Movement', function () {
        it('Player on beginning location (numbered 0), rolls 7, ends up on location 7', function () {
            var name = new Tiny.PlayerName('Race Car'),
                location = new Tiny.Location(0),
                player = new Player(name, location);
            player.moveSpaces(7);
        });

        it('Player on location numbered 39, rolls 6, ends up on location 5', function () {
            var name = new Tiny.PlayerName('Race Car'),
                location = new Tiny.Location(39),
                player = new Player(name, location);
            player.moveSpaces(6);
            expect(player.location.getPosition()).toBe(5);
        });
    });
});