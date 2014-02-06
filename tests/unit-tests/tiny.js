define(function (require) {
    'use strict';
    var Location = require('tiny').Location;

    describe('Tiny', function () {
        describe('Location', function () {
            describe('ctor', function () {
                it('defaults position to 0', function () {
                    var location = new Location();
                    expect(location.getPosition()).toBe(0);
                });

                it('accepts a position argument', function () {
                    var location = new Location(5);
                    expect(location.getPosition()).toBe(5);
                });
            });

            describe('incrementPosition', function () {
                it('increments the position of the location (location = 0)', function () {
                    var location = new Location();
                    location.incrementPosition(10);
                    expect(location.getPosition()).toBe(10);
                });

                it('increments the position of the location (location > 0)', function () {
                    var location = new Location(10);
                    location.incrementPosition(5);
                    expect(location.getPosition()).toBe(15);
                });

                it('rolls over at 40 (10 + 35 = 5)', function () {
                    var location = new Location(10);
                    location.incrementPosition(35);
                    expect(location.getPosition()).toBe(5);
                });

                it('rolls over at 40 (20 + 20 = 0)', function () {
                    var location = new Location(20);
                    location.incrementPosition(20);
                    expect(location.getPosition()).toBe(0);
                });

                it('rolls over at 40 (45 + 50 = 15)', function () {
                    var location = new Location(45);
                    location.incrementPosition(50);
                    expect(location.getPosition()).toBe(15);
                });
            });
        });
    });
});