/*jshint unused:false */
var should = require('should');
var Greeter = require('../client/greeter.js');

describe('TypeScript is compiled OK', () => {
    it('greets Yoda', () => {
        var g = new Greeter();
        g.greet('Yoda').should.equal('A type-scripting greeting to you, Yoda');
    });
});
