define(function (require) {
    'use strict';
    var Tiny = require('tiny'),
        Location = Tiny.Location,
        PlayerName = Tiny.PlayerName,
        Player = require('Player'),
        Game = require('game');

    describe('Game', function () {
        describe('ctor', function () {
            it('accepts an array of players', function () {
                var go = new Location(0),
                    name = new PlayerName('Tophat'),
                    player = new Player(name, go),
                    game = new Game([player]);
                expect(game.players).toBeDefined();
            });
        });

        describe('playerCount', function () {
            it('returns the number of players', function () {
                var go = new Location(0),
                    player1 = new Player(new PlayerName('Top Hat'), go),
                    player2 = new Player(new PlayerName('Iron'), go),
                    game = new Game([player1, player2]);
                expect(game.playerCount()).toBe(2);
            });
        });
    });
});