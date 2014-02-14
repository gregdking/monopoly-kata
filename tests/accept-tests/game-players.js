define(function (require) {
    'use strict';
    var Player = require('player'),
        Tiny = require('tiny'),
        Game = require('game');

    describe('Game Players', function () {
        it('Create a game with two players named Horse and Car', function () {
            var go = new Tiny.Location(0),
                horse = new Tiny.PlayerName('Horse'),
                car = new Tiny.PlayerName('Car'),
                horsePlayer = new Player(horse, go),
                carPlayer = new Player(car, go),
                game = new Game([horsePlayer, carPlayer]);
            expect(game.playerCount()).toBe(2);
            expect(game.player1).toBe(horsePlayer);
            expect(game.player2).toBe(carPlayer);
            expect(game.player1Name).toBe(horse);
            expect(game.player2Name).toBe(car);
        });
    });
});