define(function (require) {
    'use strict';
    var Player = require('player'),
        Tiny = require('tiny');

    describe('Player', function () {
        describe('ctor', function () {
            it('accepts a player name and location', function () {
                var location = new Tiny.Location(),
                    name = new Tiny.PlayerName('Race Car'),
                    player = new Player(name, location);
                expect(player.name).toBe(name);
                expect(player.location).toBe(location);
            });
        });
    });
});