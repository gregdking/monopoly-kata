define(function (require) {
    'use strict';
    var Player = require('player'),
        Tiny = require('tiny');

    describe('Player', function () {
        describe('ctor', function () {
            it('accepts a location', function () {
                var location = new Tiny.Location(),
                    player = new Player(location);
                expect(player.location).toBe(location);
            });
        });
    });
});